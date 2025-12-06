gdjs._48120_49696_44288_32_48317_32_50724Code = {};
gdjs._48120_49696_44288_32_48317_32_50724Code.localVariables = [];
gdjs._48120_49696_44288_32_48317_32_50724Code.idToCallbackMap = new Map();
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSpriteObjects1= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSpriteObjects2= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite2Objects1= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite2Objects2= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDChevron_9595Arrow_9595LeftObjects1= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDChevron_9595Arrow_9595LeftObjects2= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite3Objects1= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite3Objects2= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite4Objects1= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite4Objects2= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDStarObjects1= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDStarObjects2= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewTextObjects1= [];
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewTextObjects2= [];


gdjs._48120_49696_44288_32_48317_32_50724Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550724Code_9546GDChevron_95959595Arrow_95959595LeftObjects1Objects = Hashtable.newFrom({"Chevron_Arrow_Left": gdjs._48120_49696_44288_32_48317_32_50724Code.GDChevron_9595Arrow_9595LeftObjects1});
gdjs._48120_49696_44288_32_48317_32_50724Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550724Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite2Objects1});
gdjs._48120_49696_44288_32_48317_32_50724Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550724Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite4Objects1});
gdjs._48120_49696_44288_32_48317_32_50724Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Chevron_Arrow_Left"), gdjs._48120_49696_44288_32_48317_32_50724Code.GDChevron_9595Arrow_9595LeftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_48317_32_50724Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550724Code_9546GDChevron_95959595Arrow_95959595LeftObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16160052);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 이동", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_48317_32_50724Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550724Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15860796);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "4", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16202964);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "5", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_48317_32_50724Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959548317_959532_959550724Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15842956);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "6", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16001524);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


};

gdjs._48120_49696_44288_32_48317_32_50724Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSpriteObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSpriteObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite2Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite2Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite3Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite3Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite4Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite4Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDStarObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDStarObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewTextObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewTextObjects2.length = 0;

gdjs._48120_49696_44288_32_48317_32_50724Code.eventsList0(runtimeScene);
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSpriteObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSpriteObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite2Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite2Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite3Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite3Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite4Objects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewSprite4Objects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDStarObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDStarObjects2.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewTextObjects1.length = 0;
gdjs._48120_49696_44288_32_48317_32_50724Code.GDNewTextObjects2.length = 0;


return;

}

gdjs['_48120_49696_44288_32_48317_32_50724Code'] = gdjs._48120_49696_44288_32_48317_32_50724Code;
