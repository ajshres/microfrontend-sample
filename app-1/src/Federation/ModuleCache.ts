export class RegistryManager {
  private readonly registry = new Map<string, any>();

  register(remote: string, modulePath: string, instance: any) {
    this.registry.set(`${remote}/${modulePath}`, instance);
  }

  get(remote: string, modulePath: string) {
    return this.registry.get(`${remote}/${modulePath}`) ?? null;
  }

  has(remote: string, modulePath: string) {
    return this.registry.has(`${remote}/${modulePath}`);
  }
  
  delete(remote: string) {
     for (const key of this.registry.keys()) {
      if (key.startsWith(`${remote}/`)) {
        this.registry.delete(key);
      }
    }
  }

  clear() {
    this.registry.clear();
  }

  list() {
    return Array.from(this.registry.entries());
  }
}

// Singleton instance if needed
export const registryManager = new RegistryManager();