gdjs._48120_49696_44288_32_50526Code = {};
gdjs._48120_49696_44288_32_50526Code.localVariables = [];
gdjs._48120_49696_44288_32_50526Code.idToCallbackMap = new Map();
gdjs._48120_49696_44288_32_50526Code.GD_95951Objects1= [];
gdjs._48120_49696_44288_32_50526Code.GD_95951Objects2= [];
gdjs._48120_49696_44288_32_50526Code.GDNewSprite2Objects1= [];
gdjs._48120_49696_44288_32_50526Code.GDNewSprite2Objects2= [];
gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1= [];
gdjs._48120_49696_44288_32_50526Code.GD_95952Objects2= [];
gdjs._48120_49696_44288_32_50526Code.GD_95953Objects1= [];
gdjs._48120_49696_44288_32_50526Code.GD_95953Objects2= [];


gdjs._48120_49696_44288_32_50526Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16442220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._48120_49696_44288_32_50526Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._48120_49696_44288_32_50526Code.GD_95953Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50526Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50526Code.GD_95951Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50526Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50526Code.GD_95953Objects1[i].hide();
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16443348);
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
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._48120_49696_44288_32_50526Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1);
{for(var i = 0, len = gdjs._48120_49696_44288_32_50526Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50526Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._48120_49696_44288_32_50526Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_50526Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_50526Code.GD_95953Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 안", false);
}
}

}


};

gdjs._48120_49696_44288_32_50526Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._48120_49696_44288_32_50526Code.GD_95951Objects1.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95951Objects2.length = 0;
gdjs._48120_49696_44288_32_50526Code.GDNewSprite2Objects1.length = 0;
gdjs._48120_49696_44288_32_50526Code.GDNewSprite2Objects2.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95952Objects2.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95953Objects1.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95953Objects2.length = 0;

gdjs._48120_49696_44288_32_50526Code.eventsList0(runtimeScene);
gdjs._48120_49696_44288_32_50526Code.GD_95951Objects1.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95951Objects2.length = 0;
gdjs._48120_49696_44288_32_50526Code.GDNewSprite2Objects1.length = 0;
gdjs._48120_49696_44288_32_50526Code.GDNewSprite2Objects2.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95952Objects1.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95952Objects2.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95953Objects1.length = 0;
gdjs._48120_49696_44288_32_50526Code.GD_95953Objects2.length = 0;


return;

}

gdjs['_48120_49696_44288_32_50526Code'] = gdjs._48120_49696_44288_32_50526Code;
