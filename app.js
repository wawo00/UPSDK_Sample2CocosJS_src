
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        size.wi
        cc.log("===> js size wd: %d", size.width);
        cc.log("===> js size ht: %d", size.height);
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello Sam"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello Js, By Sam", "Arial", 26);

        var offtop = 16;
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y =  offtop;
        // add the label as a child to this layer
        this.addChild(helloLabel, 1);
        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        
        this.sprite.attr({
            x: size.width / 2,
            y: 32,
            anchorX: 0.5,  
            anchorY: 0.0
        });
        this.addChild(this.sprite, 0);

        var left = 0;
        var top = 620 - 20;

        var x = left;
        var y = top;
        

        var bottomCpId = "sample_banner_foreign";
        var topCpId = "sample_banner_foreign";
        var cpPlaceId = "sample_inter_foreign";
        var distHt = 90;
        var disWd = 185;
        // add button for test
        var initSdkButton = this.createButton(x, y, "initSdk");
        initSdkButton.addTouchEventListener(function(sender, type){
            cc.log("===> js initSdkButton action: %d", type);
            if (type == 2) {
                upltv.intSdk(0);
            }
        }, this);

        y -= distHt;
        var initSdkButton2 = this.createButton(x, y, "initSdkCall");
        initSdkButton2.addTouchEventListener(function(sender, type){
            cc.log("===> js initSdkButton2 action: %d", type);
            if (type == 2) {
                upltv.intSdk(0, function(r){cc.log("===> js intSdk result:, %s", r);});
            }
        }, this);

        y -= distHt;
        var initAbButton = this.createButton(x, y, "initABTest");
        initAbButton.addTouchEventListener(function(sender, type){
            cc.log("===> js initAbButton action: %d", type);
            if (type == 2) {
                upltv.initAbtConfigJson("u89731", true, 0, "Facebook", "M", -1, ["This is the first element.", "The second one.", "The last one."]);
            }
        }, this);
        
        y -= distHt;
        var getAbButton = this.createButton(x, y, "getABConfig");
        getAbButton.addTouchEventListener(function(sender, type){
            cc.log("===> js getABConfig action: %d", type);
            if (type == 2) {
                var r = upltv.getAbtConfig("pass");
                cc.log("===> js getAbtConfig rr 3333: %s", r);
            }
        }, this);

        // 第二行
        x = left + disWd;
        y = top;

        var showRdUIButton = this.createButton(x, y, "rdDebugUI");
        showRdUIButton.addTouchEventListener(function(sender, type){
            cc.log("===> js showRewardDebugUI action: %d", type);
            if (type == 2) {
                upltv.showRewardDebugUI();
            }
        }, this);

        y -= distHt;
        var rdLoadCallButton = this.createButton(x, y, "rdLoadCall");
        rdLoadCallButton.addTouchEventListener(function(sender, type){
            cc.log("===> js setRewardVideoLoadCallback action: %d", type);
            if (type == 2) {
                upltv.setRewardVideoLoadCallback(function(cpid, msg){
                    cc.log("===> js RewardVideo LoadCallback Success at: %s", cpid);
                }, function(cpid, msg){
                    cc.log("===> js RewardVideo LoadCallback Fail at: %s", cpid);
                });
            }
        }, this);

        y -= distHt;
        var rdShowCallButton = this.createButton(x, y, "rdShowCall");
        rdShowCallButton.addTouchEventListener(function(sender, type){
            cc.log("===> js setRewardVideoShowCallback action: %d", type);
            if (type == 2) {
                upltv.setRewardVideoShowCallback(function(type, cpid){
                    var event = "unkown";
                    if (type == upltv.AdEventType.VIDEO_EVENT_DID_SHOW) {
                        event = "Did_Show";
                    }
                    else if (type == upltv.AdEventType.VIDEO_EVENT_DID_CLICK) {
                        event = "Did_Click";
                    }
                    else if (type == upltv.AdEventType.VIDEO_EVENT_DID_CLOSE) {
                        event = "Did_Close";
                    }else if (type == upltv.AdEventType.VIDEO_EVENT_DID_GIVEN_REWARD) {
                        event = "Did_Given_Reward";
                    }else if (type == upltv.AdEventType.VIDEO_EVENT_DID_ABANDON_REWARD) {
                        event = "Did_Abandon_Reward";
                    }
                    cc.log("===> js RewardVideo Show Callback, event: %s, at: %s", event, cpid);
                });
            }
        }, this);

        y -= distHt;
        var readyRdUIButton = this.createButton(x, y, "rdReady");
        readyRdUIButton.addTouchEventListener(function(sender, type){
            cc.log("===> js isRewardReady action: %d", type);
            if (type == 2) {
                var r = upltv.isRewardReady();
                cc.log("===> js isRewardReady r: %s", r.toString());
            }
        }, this);

        y -= distHt;
        var showRdUIButton = this.createButton(x, y, "rdShow");
        showRdUIButton.addTouchEventListener(function(sender, type){
            cc.log("===> js showRewardVideo action: %d", type);
            if (type == 2) {
                var r = upltv.isRewardReady();
                cc.log("===> js isRewardReady r: %s", r);
                if (r == true) {
                    cc.log("===> js showRewardVideo call");
                    upltv.showRewardVideo();
                }
            }
        }, this);

        // 第三列插屏广告

        x = left + disWd*2;
        y = top;
        
        //var cpPlaceId = "Interstitial_GameStart";
        var ilShowUIButton = this.createButton(x, y, "ilShowUI");
        ilShowUIButton.addTouchEventListener(function(sender, type) {
            cc.log("===> js showInterstitialDebugUI action: %d", type);
            if (type == 2) {
                upltv.showInterstitialDebugUI();
            }
        }, this);

        y -= distHt;
        var ilLoadCallUIButton = this.createButton(x, y, "ilLoadCall");
        ilLoadCallUIButton.addTouchEventListener(function(sender, type) {
            cc.log("===> js setInterstitialLoadCallback action: %d", type);
            if (type == 2) {
                upltv.setInterstitialLoadCallback(cpPlaceId,
                    function(cpid, msg){
                        cc.log("===> js il load callback success: %s at placementid:%s", msg, cpid);
                     }, 
                    function(cpid, msg){
                        cc.log("===> js il load callback fail: %s at placementid:%s", msg, cpid);
                    });
            }
        }, this);

        
        y -= distHt;
        var ilShowCallUIButton = this.createButton(x, y, "ilShowCall");
        ilShowCallUIButton.addTouchEventListener(function(sender, type) {
            cc.log("===> js setInterstitialShowCallback action: %d", type);
            if (type == 2) {
                upltv.setInterstitialShowCallback(cpPlaceId, 
                    function(type, cpid){
                        var event = "unkown";
                        if (type == upltv.AdEventType.INTERSTITIAL_EVENT_DID_SHOW) {
                            event = "Did_Show";
                        }
                        else if (type == upltv.AdEventType.INTERSTITIAL_EVENT_DID_CLICK) {
                            event = "Did_Click";
                        }
                        else if (type == upltv.AdEventType.INTERSTITIAL_EVENT_DID_CLOSE) {
                            event = "Did_Close";
                        }
                        cc.log("===> js il ad event: %s, at placementid: %s", event, cpid);
                    }
                );
            }
        }, this);

        y -= distHt;
        var ilReadyAsynUIButton = this.createButton(x, y, "ilReadyAsyn");
        ilReadyAsynUIButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js isInterstitialReadyAsyn action: %d", type);
            if (type == 2) {
                upltv.isInterstitialReadyAsyn(cpPlaceId, function(r){
                    cc.log("===> js il ad isreadyasyn: %s at placementid:%s", r, cpPlaceId);
                });
            }
        }, this);
 
        y -= distHt;
        var ilShowUIButton = this.createButton(x, y, "ilShow");
        ilShowUIButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js isInterstitialReady action: %d", type);
            if (type == 2) {
                var r = upltv.isInterstitialReady(cpPlaceId);
                cc.log("===> js il ad isready: %s at placementid:%s", r, cpPlaceId);
                if (r == true) {
                    upltv.showInterstitialAd(cpPlaceId);
                }
                
            }
        }, this);

        //第四列
        x = left + disWd*3;
        y = top;

 

        var bnCallButton = this.createButton(x, y, "SetBNCall");
        bnCallButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js showBannerAdAtTop action: %d", type);
            if (type == 2) {
                var bannerCall = function(type, cpadid) {
                    var event = "unkown";
                    if (type == upltv.AdEventType.BANNER_EVENT_DID_SHOW) {
                        event = "Did_Show";
                    }
                    else if (type == upltv.AdEventType.BANNER_EVENT_DID_CLICK) {
                        event = "Did_Click";
                    }
                    else if (type == upltv.AdEventType.BANNER_EVENT_DID_REMOVED) {
                        event = "Did_Removed";
                    }
                    cc.log("=====> banner event: %s, at : %s" , event, cpadid);
                };
        
           
                upltv.setBannerShowCallback(topCpId, 
                    bannerCall);

                upltv.setBannerShowCallback(bottomCpId, 
                    bannerCall);
            }
        }, this);

        y -= distHt;
        var bnTopButton = this.createButton(x, y, "TopBNShow");
        bnTopButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js showBannerAdAtTop action: %d", type);
            if (type == 2) {
                upltv.setTopBannerPading(50);
                upltv.showBannerAdAtTop(topCpId);
            }
        }, this);

        y -= distHt;
        var bnBottomButton = this.createButton(x, y, "BottomBNShow");
        bnBottomButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js showBannerAdAtTop action: %d", type);
            if (type == 2) {
                upltv.showBannerAdAtBottom(bottomCpId);  
            }
        }, this);

        y -= distHt;
        var bnHideButton = this.createButton(x, y, "hideAllBN");
        bnHideButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js showBannerAdAtTop action: %d", type);
            if (type == 2) {
                upltv.hideBannerAdAtTop(); 
                upltv.hideBannerAdAtBottom();
            }
        }, this);

        y -= distHt;
        var bnRemoveButton = this.createButton(x, y, "removeAllBn");
        bnRemoveButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js showBannerAdAtTop action: %d", type);
            if (type == 2) {
                upltv.removeBannerAdAt(topCpId);
                upltv.removeBannerAdAt(bottomCpId);  
            }
        }, this);

        // 第五行
        x = left + disWd*4;
        y = top;
        //onBackPressed setManifestPackageName
        var setPkgButton = this.createButton(x, y, "setPkg");
        setPkgButton.addTouchEventListener(function(sender, type) {
            if (type == 2) {
                upltv.setManifestPackageName("com.js.test");
            }
        }, this);

        y -= distHt;
        var onBackButton = this.createButton(x, y, "onBackPressed");
        onBackButton.addTouchEventListener(function(sender, type) {
            if (type == 2) {
                upltv.setBackPressedCallback(function(type, msg) {
                    var event = "unkown";
                    if (type == upltv.AdEventType.EXITAD_EVENT_DID_SHOW) {
                        event = "Did_Show";
                    }
                    else if (type == upltv.AdEventType.EXITAD_EVENT_DID_CLICK) {
                        event = "Did_Click";
                    }
                    else if (type == upltv.AdEventType.EXITAD_EVENT_DID_CLICKMORE) {
                        event = "Did_Click_More";
                    }
                    else if (type == upltv.AdEventType.EXITAD_EVENT_DID_CLICKMORE) {
                        event = "Did_Click_More";
                    }
                    else if (type == upltv.AdEventType.EXITAD_EVENT_DID_CANCEL) {
                        event = "Did_Cancel";
                    }
                    cc.log("=====> exit ad event: %s, at : %s", event, cpadid);
                });
                
             upltv.onBackPressed();
            }
        }, this);

        y -= distHt;
        var loadManualButton = this.createButton(x, y, "loadByManual");
        loadManualButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js showBannerAdAtTop action: %d", type);
            if (type == 2) {
                upltv.loadAdsByManual();
            }
        }, this);

        y -= distHt;
        var exitAppButton = this.createButton(x, y, "exitApp");
        exitAppButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js showBannerAdAtTop action: %d", type);
            if (type == 2) {
                upltv.exitApp();
            }
        }, this);

        y -= distHt;
        var exitAppButton = this.createButton(x, y, "GDPR");
        exitAppButton.addTouchEventListener(function(sender, type) {
            //cc.log("===> js showBannerAdAtTop action: %d", type);
            if (type == 2) {
                var e = upltv.getAccessPrivacyInfoStatus();
                cc.log("===> js getAccessPrivacyInfoStatus : %d", e);
                if (e != upltv.GDPRPermissionEnum.UPAccessPrivacyInfoStatusUnkown) {
                    var ee = upltv.GDPRPermissionEnum.UPAccessPrivacyInfoStatusUnkown;
                    cc.log("===> js updateAccessPrivacyInfoStatus to : %d", ee);
                    upltv.updateAccessPrivacyInfoStatus(ee);
                    //
                }
                upltv.updateAccessPrivacyInfoStatus(upltv.GDPRPermissionEnum.UPAccessPrivacyInfoStatusAccepted);
                cc.log("===> js call notifyAccessPrivacyInfoStatus()");
                upltv.notifyAccessPrivacyInfoStatus(function(result){
                    cc.log("===> js notifyAccessPrivacyInfoStatus result: %d", result);
                });
                upltv.isEuropeanUnionUser(function(r) {
                    cc.log("===> js isEuropeanUnionUser result: %s", r);
                });
            }
        }, this);

        return true;
    },


    createButton: function(left, top, text) {
        var normalImage = "res/feedback.png";
        var pressedImage = "res/feedback_active.png";
        var button = new ccui.Button();
        button.loadTextures(normalImage, pressedImage);
        button.setText
        button.attr({
            x: left,
            y: top,
            anchorX: 0.0,  
            anchorY: 1.0
        });
        button.setTitleText(text);
        button.setTitleFontSize(22);
        this.addChild(button, 1);
        return button;
    }

    
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

