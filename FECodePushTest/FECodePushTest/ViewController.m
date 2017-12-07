//
//  ViewController.m
//  FECodePushTest
//
//  Created by FlyElephant on 2017/12/6.
//  Copyright © 2017年 FlyElephant. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
#import "CodePush.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [self setup];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)setup {
    NSURL *jsCodeLocation = [CodePush bundleURLForResource:@"main" withExtension:@"jsbundle" subdirectory:@"bundle"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"FECodePushTest"
                         initialProperties :
     @{
       @"scores" : @[
               @{
                   @"name" : @"FlyElephant",
                   @"value": @"100"
                   },
               @{
                   @"name" : @"Keso",
                   @"value": @"10"
                   }
               ]
       }
                          launchOptions    : nil];
    rootView.frame = CGRectMake(0, 150, [UIScreen mainScreen].bounds.size.width, 300);
    [self.view addSubview:rootView];
}

- (void)setup2 {
    NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"bundle/index.ios" withExtension:@"jsbundle"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"FECodePushTest"
                         initialProperties :
     @{
       @"scores" : @[
               @{
                   @"name" : @"FlyElephant",
                   @"value": @"100"
                   },
               @{
                   @"name" : @"Keso",
                   @"value": @"10"
                   }
               ]
       }
                          launchOptions    : nil];
    rootView.frame = CGRectMake(0, 150, [UIScreen mainScreen].bounds.size.width, 300);
    [self.view addSubview:rootView];
}

- (void)setup1 {
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://127.0.0.1:8081/index.ios.bundle?platform=ios"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"FECodePushTest"
                         initialProperties :
     @{
       @"scores" : @[
               @{
                   @"name" : @"FlyElephant",
                   @"value": @"100"
                   },
               @{
                   @"name" : @"Keso",
                   @"value": @"10"
                   }
               ]
       }
                          launchOptions    : nil];
    rootView.frame = CGRectMake(0, 150, [UIScreen mainScreen].bounds.size.width, 300);
    [self.view addSubview:rootView];
}


@end
