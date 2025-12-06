gdjs._50Code = {};
gdjs._50Code.localVariables = [];
gdjs._50Code.idToCallbackMap = new Map();
gdjs._50Code.GDNewSpriteObjects1= [];
gdjs._50Code.GDNewSpriteObjects2= [];
gdjs._50Code.GDNewSprite2Objects1= [];
gdjs._50Code.GDNewSprite2Objects2= [];
gdjs._50Code.GDSquareWhiteToggleObjects1= [];
gdjs._50Code.GDSquareWhiteToggleObjects2= [];
gdjs._50Code.GDNewSprite3Objects1= [];
gdjs._50Code.GDNewSprite3Objects2= [];
gdjs._50Code.GDNewTextObjects1= [];
gdjs._50Code.GDNewTextObjects2= [];
gdjs._50Code.GDNewText2Objects1= [];
gdjs._50Code.GDNewText2Objects2= [];
gdjs._50Code.GDNewSprite4Objects1= [];
gdjs._50Code.GDNewSprite4Objects2= [];
gdjs._50Code.GDDpad_9595ButtonObjects1= [];
gdjs._50Code.GDDpad_9595ButtonObjects2= [];


gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._50Code.GDNewSprite4Objects1});
gdjs._50Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16957108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._50Code.GDNewSprite4Objects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "1");
}
{for(var i = 0, len = gdjs._50Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite4Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16957684);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._50Code.GDNewSprite4Objects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "1");
}
{for(var i = 0, len = gdjs._50Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite4Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._50Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16959060);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 벽 왼", false);
}
}

}


};

gdjs._50Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50Code.GDNewSpriteObjects1.length = 0;
gdjs._50Code.GDNewSpriteObjects2.length = 0;
gdjs._50Code.GDNewSprite2Objects1.length = 0;
gdjs._50Code.GDNewSprite2Objects2.length = 0;
gdjs._50Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._50Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._50Code.GDNewSprite3Objects1.length = 0;
gdjs._50Code.GDNewSprite3Objects2.length = 0;
gdjs._50Code.GDNewTextObjects1.length = 0;
gdjs._50Code.GDNewTextObjects2.length = 0;
gdjs._50Code.GDNewText2Objects1.length = 0;
gdjs._50Code.GDNewText2Objects2.length = 0;
gdjs._50Code.GDNewSprite4Objects1.length = 0;
gdjs._50Code.GDNewSprite4Objects2.length = 0;
gdjs._50Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._50Code.GDDpad_9595ButtonObjects2.length = 0;

gdjs._50Code.eventsList0(runtimeScene);
gdjs._50Code.GDNewSpriteObjects1.length = 0;
gdjs._50Code.GDNewSpriteObjects2.length = 0;
gdjs._50Code.GDNewSprite2Objects1.length = 0;
gdjs._50Code.GDNewSprite2Objects2.length = 0;
gdjs._50Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._50Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._50Code.GDNewSprite3Objects1.length = 0;
gdjs._50Code.GDNewSprite3Objects2.length = 0;
gdjs._50Code.GDNewTextObjects1.length = 0;
gdjs._50Code.GDNewTextObjects2.length = 0;
gdjs._50Code.GDNewText2Objects1.length = 0;
gdjs._50Code.GDNewText2Objects2.length = 0;
gdjs._50Code.GDNewSprite4Objects1.length = 0;
gdjs._50Code.GDNewSprite4Objects2.length = 0;
gdjs._50Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._50Code.GDDpad_9595ButtonObjects2.length = 0;


return;

}

gdjs['_50Code'] = gdjs._50Code;
