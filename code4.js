gdjs._48120_49696_44288_32_50504Code = {};
gdjs._48120_49696_44288_32_50504Code.localVariables = [];
gdjs._48120_49696_44288_32_50504Code.idToCallbackMap = new Map();
gdjs._48120_49696_44288_32_50504Code.GDNewSpriteObjects1= [];
gdjs._48120_49696_44288_32_50504Code.GDNewSpriteObjects2= [];
gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1= [];
gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects2= [];
gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1= [];
gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects2= [];
gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1= [];
gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects2= [];
gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1= [];
gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects2= [];


gdjs._48120_49696_44288_32_50504Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959550504Code_9546GDDpad_95959595ButtonObjects1Objects = Hashtable.newFrom({"Dpad_Button": gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1});
gdjs._48120_49696_44288_32_50504Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16471140);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16472180);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_50504Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959550504Code_9546GDDpad_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16473668);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 이동", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._48120_49696_44288_32_50504Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._48120_49696_44288_32_50504Code.GDNewSpriteObjects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSpriteObjects2.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects2.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects2.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects2.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects2.length = 0;

gdjs._48120_49696_44288_32_50504Code.eventsList0(runtimeScene);
gdjs._48120_49696_44288_32_50504Code.GDNewSpriteObjects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSpriteObjects2.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSprite2Objects2.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewSprite3Objects2.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDNewText2Objects2.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._48120_49696_44288_32_50504Code.GDDpad_9595ButtonObjects2.length = 0;


return;

}

gdjs['_48120_49696_44288_32_50504Code'] = gdjs._48120_49696_44288_32_50504Code;
