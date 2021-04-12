#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNUserdefaults, NSObject)

RCT_EXTERN_METHOD(setFromSuite: (NSString *)value forKey: (NSString *)key inSuite: (NSString *)suite)
RCT_EXTERN_METHOD(set: (NSString *)value forKey: (NSString *)key)

RCT_EXTERN_METHOD(removeFromSuite: (NSString *)key inSuite: (NSString *)suite)
RCT_EXTERN_METHOD(remove: (NSString *)key)

RCT_EXTERN_METHOD(getFromSuite: (NSString *)key
                  inSuite: (NSString *)suite
                  resolve: (RCTPromiseResolveBlock)resolve
                  reject: (RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(get: (NSString *)key
                  resolve: (RCTPromiseResolveBlock)resolve
                  reject: (RCTPromiseRejectBlock)reject)

@end
