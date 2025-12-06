gdjs._49884_51089Code = {};
gdjs._49884_51089Code.localVariables = [];
gdjs._49884_51089Code.idToCallbackMap = new Map();
gdjs._49884_51089Code.GDNewSpriteObjects1= [];
gdjs._49884_51089Code.GDNewSpriteObjects2= [];
gdjs._49884_51089Code.GDNewSprite2Objects1= [];
gdjs._49884_51089Code.GDNewSprite2Objects2= [];
gdjs._49884_51089Code.GDNewTiledSpriteObjects1= [];
gdjs._49884_51089Code.GDNewTiledSpriteObjects2= [];
gdjs._49884_51089Code.GDNewSprite3Objects1= [];
gdjs._49884_51089Code.GDNewSprite3Objects2= [];
gdjs._49884_51089Code.GDNewSprite4Objects1= [];
gdjs._49884_51089Code.GDNewSprite4Objects2= [];
gdjs._49884_51089Code.GD_95952Objects1= [];
gdjs._49884_51089Code.GD_95952Objects2= [];
gdjs._49884_51089Code.GDDpad_9595ButtonObjects1= [];
gdjs._49884_51089Code.GDDpad_9595ButtonObjects2= [];
gdjs._49884_51089Code.GD_95951Objects1= [];
gdjs._49884_51089Code.GD_95951Objects2= [];
gdjs._49884_51089Code.GD_95953Objects1= [];
gdjs._49884_51089Code.GD_95953Objects2= [];
gdjs._49884_51089Code.GD_9551060_9546041Objects1= [];
gdjs._49884_51089Code.GD_9551060_9546041Objects2= [];


gdjs._49884_51089Code.mapOfGDgdjs_9546_959549884_959551089Code_9546GDDpad_95959595ButtonObjects1Objects = Hashtable.newFrom({"Dpad_Button": gdjs._49884_51089Code.GDDpad_9595ButtonObjects1});
gdjs._49884_51089Code.mapOfGDgdjs_9546_959549884_959551089Code_9546GD_95959551060_95959546041Objects1Objects = Hashtable.newFrom({"이동": gdjs._49884_51089Code.GD_9551060_9546041Objects1});
gdjs._49884_51089Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16189332);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._49884_51089Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._49884_51089Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._49884_51089Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("이동"), gdjs._49884_51089Code.GD_9551060_9546041Objects1);
{for(var i = 0, len = gdjs._49884_51089Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GD_9551060_9546041Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_9551060_9546041Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._49884_51089Code.GDDpad_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._49884_51089Code.mapOfGDgdjs_9546_959549884_959551089Code_9546GDDpad_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16312892);
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
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._49884_51089Code.GD_95951Objects1);
{for(var i = 0, len = gdjs._49884_51089Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_95951Objects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._49884_51089Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._49884_51089Code.GD_95952Objects1);
{for(var i = 0, len = gdjs._49884_51089Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_95952Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._49884_51089Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._49884_51089Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._49884_51089Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_95953Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._49884_51089Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._49884_51089Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._49884_51089Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._49884_51089Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("이동"), gdjs._49884_51089Code.GD_9551060_9546041Objects1);
{for(var i = 0, len = gdjs._49884_51089Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GD_9551060_9546041Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GD_9551060_9546041Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("이동"), gdjs._49884_51089Code.GD_9551060_9546041Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._49884_51089Code.mapOfGDgdjs_9546_959549884_959551089Code_9546GD_95959551060_95959546041Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "이동", false);
}
}

}


};

gdjs._49884_51089Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49884_51089Code.GDNewSpriteObjects1.length = 0;
gdjs._49884_51089Code.GDNewSpriteObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite2Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite2Objects2.length = 0;
gdjs._49884_51089Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._49884_51089Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite3Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite3Objects2.length = 0;
gdjs._49884_51089Code.GDNewSprite4Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite4Objects2.length = 0;
gdjs._49884_51089Code.GD_95952Objects1.length = 0;
gdjs._49884_51089Code.GD_95952Objects2.length = 0;
gdjs._49884_51089Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._49884_51089Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._49884_51089Code.GD_95951Objects1.length = 0;
gdjs._49884_51089Code.GD_95951Objects2.length = 0;
gdjs._49884_51089Code.GD_95953Objects1.length = 0;
gdjs._49884_51089Code.GD_95953Objects2.length = 0;
gdjs._49884_51089Code.GD_9551060_9546041Objects1.length = 0;
gdjs._49884_51089Code.GD_9551060_9546041Objects2.length = 0;

gdjs._49884_51089Code.eventsList0(runtimeScene);
gdjs._49884_51089Code.GDNewSpriteObjects1.length = 0;
gdjs._49884_51089Code.GDNewSpriteObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite2Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite2Objects2.length = 0;
gdjs._49884_51089Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._49884_51089Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite3Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite3Objects2.length = 0;
gdjs._49884_51089Code.GDNewSprite4Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite4Objects2.length = 0;
gdjs._49884_51089Code.GD_95952Objects1.length = 0;
gdjs._49884_51089Code.GD_95952Objects2.length = 0;
gdjs._49884_51089Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._49884_51089Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._49884_51089Code.GD_95951Objects1.length = 0;
gdjs._49884_51089Code.GD_95951Objects2.length = 0;
gdjs._49884_51089Code.GD_95953Objects1.length = 0;
gdjs._49884_51089Code.GD_95953Objects2.length = 0;
gdjs._49884_51089Code.GD_9551060_9546041Objects1.length = 0;
gdjs._49884_51089Code.GD_9551060_9546041Objects2.length = 0;


return;

}

gdjs['_49884_51089Code'] = gdjs._49884_51089Code;
