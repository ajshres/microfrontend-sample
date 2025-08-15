import React, { useEffect, useMemo, useState, type ComponentType } from 'react';
import { loadRemote, } from '@module-federation/enhanced/runtime';
import { getModuleFederationInstance, type RemoteRoute } from './ModernFederationManager';
import { registryManager } from './ModuleCache';
import { RemoteErrorBoundary } from './RemoteErrorBoundary';

export async function loadRemoteComponent<T extends ComponentType<any> = ComponentType<any>>(remote: string, modulePath: string, exportName?: string): Promise<T|null> {
  await getModuleFederationInstance()  
  if (loadRemote) {
        const mod = await loadRemote<{default: T, [keyName: string]: T} | T>(`${remote}/${modulePath}`);
        if (exportName && typeof mod === 'object') {
            return mod && exportName in mod && mod[exportName] || null;
        }
        return (mod && 'default' in mod ? mod.default : (mod as T));
    }
    return null;
}

export function LoadComponentV2({appName, fileName}: React.PropsWithChildren<RemoteRoute>) {
  const Comp = useMemo(() => {
    if (registryManager.has(appName, fileName)) {
        const Component = registryManager.get(appName, fileName);
        return Component.default || Component;
    }
    return React.lazy(() => loadRemote(`${appName}/${fileName}`).then((Component: any) => {
      registryManager.register(appName, fileName, Component);
      return {
        default: Component.default
      };
    })
)}, [`${appName}/${fileName}`]);
    const isLazy = Comp._payload !== undefined;
    return <RemoteErrorBoundary>{isLazy
        ? (<React.Suspense fallback={`Loading ${appName}`}><Comp /></React.Suspense>)
        : <Comp />}</RemoteErrorBoundary>
}

export function LoadComponent({appName, fileName}: React.PropsWithChildren<RemoteRoute>) {
    const [Component, setComponent] = useState<React.ComponentType | null>(null);
    const [isFailed, setIsFailed] = useState<boolean>(false);

  useEffect(() => {
    getModuleFederationInstance()
      .then(() => loadRemoteComponent(appName, fileName))
      .then((mod) => {
        if (!mod) {
          return setIsFailed(true)
        } 
        setComponent(() => mod)
      } 
    )
      .catch((err) => console.error('Failed loading remote', err));
  }, [appName, fileName]);
  if (isFailed) {
    return (<div>Failed to load Component</div>);
  }

  return <RemoteErrorBoundary>{Component ? <Component /> : <div>Loading {appName}...</div>}</RemoteErrorBoundary>;
}
