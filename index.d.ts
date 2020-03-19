type  ThinkCacheType = 'file' | 'redis';

interface ThinkCacheOptionRedis {
  /**
   * 缓存过期时间（毫秒）
   */
  timeout?: number;
}

interface ThinkCacheOption {
  type?: ThinkCacheType;
  /**
   * 缓存过期时间（毫秒）
   */
  timeout?: number;
  redis?: ThinkCacheOptionRedis;
}

interface ThinkCacheCtx {
  /**
   * get cache
   *
   * @memberOf CacheExtend
   */
  cache(name: string): Promise<any>;

  /**
   * get or set cache
   * if value is null means delete cache
   * if value is undefined, get cache by name
   * else mean set cache
   * @memberOf CacheExtend
   */
  cache(name: string, value?: any, config?: ThinkCacheType | ThinkCacheOption): Promise<any>;

  /**
   * get cache
   *
   * @memberOf CacheExtend
   */
  cache(name: string, value: Promise<any>): Promise<any>;
}

declare module 'thinkjs' {
  interface Think extends ThinkCacheCtx { }
  interface Context extends ThinkCacheCtx { }
  interface Controller extends ThinkCacheCtx { }
}

declare namespace ThinkCache {
  const think: ThinkCacheCtx
  const controller: ThinkCacheCtx
  const context: ThinkCacheCtx
}

export = ThinkCache;
