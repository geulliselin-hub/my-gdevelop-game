gdjs._48120_49696_44288_32_48317_32_50812Code = {};
gdjs._48120_49696_44288_32_48317_32_50812Code.localVariables = [];
gdjs._48120_49696_44288_32_48317_32_50812Code.idToCallbackMap = new Map();
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSpriteObjects1= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSpriteObjects2= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite2Objects1= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite2Objects2= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDChevron_9595Arrow_9595LeftObjects1= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDChevron_9595Arrow_9595LeftObjects2= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite3Objects1= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite3Objects2= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite4Objects1= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite4Objects2= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDDpad_9595ButtonObjects1= [];
gdjs._48120_49696_44288_32_48317_32_50812Code.GDDpad_9595ButtonObjects2= [];


gdjs._48120_49696_44288_32_48317_32_50812Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550812Code_9546GDChevron_95959595Arrow_95959595LeftObjects1Objects = Hashtable.newFrom({"Chevron_Arrow_Left": gdjs._48120_49696_44288_32_48317_32_50812Code.GDChevron_9595Arrow_9595LeftObjects1});
gdjs._48120_49696_44288_32_48317_32_50812Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550812Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite4Objects1});
gdjs._48120_49696_44288_32_48317_32_50812Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550812Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite2Objects1});
gdjs._48120_49696_44288_32_48317_32_50812Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Chevron_Arrow_Left"), gdjs._48120_49696_44288_32_48317_32_50812Code.GDChevron_9595Arrow_9595LeftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_48317_32_50812Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550812Code_9546GDChevron_95959595Arrow_95959595LeftObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16417772);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 이동", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_48317_32_50812Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550812Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16417060);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16423060);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_48317_32_50812Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550812Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16424204);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "3", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


};

gdjs._48120_49696_44288_32_48317_32_50812Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSpriteObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSpriteObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite2Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite2Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite3Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite3Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite4Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite4Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDDpad_9595ButtonObjects2.length = 0;

gdjs._48120_49696_44288_32_48317_32_50812Code.eventsList0(runtimeScene);
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSpriteObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSpriteObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite2Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite2Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite3Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite3Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite4Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDNewSprite4Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50812Code.GDDpad_9595ButtonObjects2.length = 0;


return;

}

gdjs['_48120_49696_44288_32_48317_32_50812Code'] = gdjs._48120_49696_44288_32_48317_32_50812Code;
