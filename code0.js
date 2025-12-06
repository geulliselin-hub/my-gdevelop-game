gdjs._49828_53440_54021Code = {};
gdjs._49828_53440_54021Code.localVariables = [];
gdjs._49828_53440_54021Code.idToCallbackMap = new Map();
gdjs._49828_53440_54021Code.GDNewSprite2Objects1= [];
gdjs._49828_53440_54021Code.GDNewSprite2Objects2= [];
gdjs._49828_53440_54021Code.GDNewSpriteObjects1= [];
gdjs._49828_53440_54021Code.GDNewSpriteObjects2= [];
gdjs._49828_53440_54021Code.GDNewSprite3Objects1= [];
gdjs._49828_53440_54021Code.GDNewSprite3Objects2= [];
gdjs._49828_53440_54021Code.GDNewSprite4Objects1= [];
gdjs._49828_53440_54021Code.GDNewSprite4Objects2= [];


gdjs._49828_53440_54021Code.mapOfGDgdjs_9546_959549828_959553440_959554021Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._49828_53440_54021Code.GDNewSprite3Objects1});
gdjs._49828_53440_54021Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._49828_53440_54021Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._49828_53440_54021Code.mapOfGDgdjs_9546_959549828_959553440_959554021Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "시작", false);
}
}

}


};

gdjs._49828_53440_54021Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49828_53440_54021Code.GDNewSprite2Objects1.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite2Objects2.length = 0;
gdjs._49828_53440_54021Code.GDNewSpriteObjects1.length = 0;
gdjs._49828_53440_54021Code.GDNewSpriteObjects2.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite3Objects1.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite3Objects2.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite4Objects1.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite4Objects2.length = 0;

gdjs._49828_53440_54021Code.eventsList0(runtimeScene);
gdjs._49828_53440_54021Code.GDNewSprite2Objects1.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite2Objects2.length = 0;
gdjs._49828_53440_54021Code.GDNewSpriteObjects1.length = 0;
gdjs._49828_53440_54021Code.GDNewSpriteObjects2.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite3Objects1.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite3Objects2.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite4Objects1.length = 0;
gdjs._49828_53440_54021Code.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['_49828_53440_54021Code'] = gdjs._49828_53440_54021Code;
