#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNUserdefaults, NSObject)

RCT_EXTERN_METHOD(setWithSuite: (NSString *)value
                  forKey: (NSString *)key
                  inSuite: (NSString *)suite)

RCT_EXTERN_METHOD(set: (NSString *)value
                  forKey: (NSString *)key)

@end
