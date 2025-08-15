import { createInstance, getInstance, ModuleFederation, registerRemotes, registerShared } from '@module-federation/enhanced/runtime';
import React from 'react';
import ReactDom from 'react-dom';
import * as ReactRouterDom from 'react-router-dom';
import { registryManager } from './ModuleCache';
let mfInstance: ModuleFederation

export interface RemoteRoute {
  appName: string;
  fileName: 'Route' | 'Sidebar'
}

export async function getModuleFederationInstance() {
  // Check if instance already exists
  const checkMfInstance = getInstance();
  if (checkMfInstance) return checkMfInstance;
  if (!mfInstance) {
    mfInstance = createInstance({
      name: 'app-1',
      remotes: [],
    });
  }
  await new Promise((resolve) => {
    let trytimes = 0;
    const s = setInterval(() => {
      trytimes++;
      console.log(`Loading modules from remote: ${trytimes * 5}ms`)
      if(getInstance()) { clearInterval(s); resolve(s); }
    }, 5);
  })
  return mfInstance;
}

export async function registerRemoteComponents(remoteRoutes: RemoteRoute[], options?: {force: true}) {
    await getModuleFederationInstance();
    return registerRemotes(remoteRoutes.map((remoteRoute) => (
      {
          type:"module", 
          name: remoteRoute.appName,
          alias: remoteRoute.appName,
          entry: remoteRoute.fileName,
        }
    )), options)
}

export async function registerSharedResources() {
  await getModuleFederationInstance();
  registerShared({
        react: {  
          version: "19.1.1",
          scope: "default",
          lib: () => React,
          shareConfig: { singleton: true, requiredVersion: '^19.1.1',} 
        },
        'react-dom': {
          version: "19.1.1",
          lib: () => ReactDom,
          scope: "default", 
          shareConfig: { singleton: true, requiredVersion: '^19.1.1',}
        },
        'react-router-dom': {
          version: "7.8.0",
          lib: () => ReactRouterDom,
          scope: "default", 
          shareConfig: { singleton: true, requiredVersion: '^7.8.0',}
        },
        'tailwindcss': {
          version: "4.1.11",
          scope: "default", 
          shareConfig: { singleton: true, requiredVersion: '^4.1.11',}
        },
    });
}

export async function cleanRegistry() {
  registryManager.clear();
  const mfInstance = await getModuleFederationInstance();
    if (mfInstance) {
      mfInstance.moduleCache.clear();
    }
}

export async function cleanRegistryByAppName(remote: string) {
  registryManager.delete(remote)
  const mfInstance = await getModuleFederationInstance();
  if (mfInstance) {
      mfInstance.moduleCache.delete(remote);
      mfInstance.remoteHandler.host.moduleCache.delete(remote);
  }
  console.log("mfInstance", mfInstance);
}

export async function getRegistry() {
  const mfInstance = await getModuleFederationInstance();
  console.log("mfInstance", mfInstance);
}





