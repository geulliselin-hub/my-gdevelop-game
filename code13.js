gdjs._54Code = {};
gdjs._54Code.localVariables = [];
gdjs._54Code.idToCallbackMap = new Map();
gdjs._54Code.GDNewSpriteObjects1= [];
gdjs._54Code.GDNewSpriteObjects2= [];
gdjs._54Code.GDNewSprite2Objects1= [];
gdjs._54Code.GDNewSprite2Objects2= [];
gdjs._54Code.GDSquareWhiteToggleObjects1= [];
gdjs._54Code.GDSquareWhiteToggleObjects2= [];
gdjs._54Code.GDNewSprite3Objects1= [];
gdjs._54Code.GDNewSprite3Objects2= [];
gdjs._54Code.GDNewTextObjects1= [];
gdjs._54Code.GDNewTextObjects2= [];
gdjs._54Code.GDNewSprite4Objects1= [];
gdjs._54Code.GDNewSprite4Objects2= [];
gdjs._54Code.GDNewText2Objects1= [];
gdjs._54Code.GDNewText2Objects2= [];
gdjs._54Code.GDNewText3Objects1= [];
gdjs._54Code.GDNewText3Objects2= [];
gdjs._54Code.GDCursor_95951Objects1= [];
gdjs._54Code.GDCursor_95951Objects2= [];


gdjs._54Code.mapOfGDgdjs_9546_959554Code_9546GDSquareWhiteToggleObjects1Objects = Hashtable.newFrom({"SquareWhiteToggle": gdjs._54Code.GDSquareWhiteToggleObjects1});
gdjs._54Code.mapOfGDgdjs_9546_959554Code_9546GDCursor_959595951Objects1Objects = Hashtable.newFrom({"Cursor_1": gdjs._54Code.GDCursor_95951Objects1});
gdjs._54Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._54Code.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._54Code.mapOfGDgdjs_9546_959554Code_9546GDSquareWhiteToggleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16813108);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 벽 오", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16814396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._54Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._54Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._54Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._54Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._54Code.GDSquareWhiteToggleObjects1);
{for(var i = 0, len = gdjs._54Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._54Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._54Code.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs._54Code.GDSquareWhiteToggleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._54Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._54Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._54Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._54Code.GDNewText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._54Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._54Code.GDNewText3Objects1[i].hide();
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor_1"), gdjs._54Code.GDCursor_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._54Code.mapOfGDgdjs_9546_959554Code_9546GDCursor_959595951Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs._54Code.GDCursor_95951Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._54Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._54Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._54Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._54Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._54Code.GDSquareWhiteToggleObjects1);
{for(var i = 0, len = gdjs._54Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._54Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._54Code.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs._54Code.GDSquareWhiteToggleObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._54Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._54Code.GDNewSprite4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._54Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._54Code.GDNewText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._54Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._54Code.GDNewText3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._54Code.GDCursor_95951Objects1.length ;i < len;++i) {
    gdjs._54Code.GDCursor_95951Objects1[i].hide();
}
}
}

}


};

gdjs._54Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._54Code.GDNewSpriteObjects1.length = 0;
gdjs._54Code.GDNewSpriteObjects2.length = 0;
gdjs._54Code.GDNewSprite2Objects1.length = 0;
gdjs._54Code.GDNewSprite2Objects2.length = 0;
gdjs._54Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._54Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._54Code.GDNewSprite3Objects1.length = 0;
gdjs._54Code.GDNewSprite3Objects2.length = 0;
gdjs._54Code.GDNewTextObjects1.length = 0;
gdjs._54Code.GDNewTextObjects2.length = 0;
gdjs._54Code.GDNewSprite4Objects1.length = 0;
gdjs._54Code.GDNewSprite4Objects2.length = 0;
gdjs._54Code.GDNewText2Objects1.length = 0;
gdjs._54Code.GDNewText2Objects2.length = 0;
gdjs._54Code.GDNewText3Objects1.length = 0;
gdjs._54Code.GDNewText3Objects2.length = 0;
gdjs._54Code.GDCursor_95951Objects1.length = 0;
gdjs._54Code.GDCursor_95951Objects2.length = 0;

gdjs._54Code.eventsList0(runtimeScene);
gdjs._54Code.GDNewSpriteObjects1.length = 0;
gdjs._54Code.GDNewSpriteObjects2.length = 0;
gdjs._54Code.GDNewSprite2Objects1.length = 0;
gdjs._54Code.GDNewSprite2Objects2.length = 0;
gdjs._54Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._54Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._54Code.GDNewSprite3Objects1.length = 0;
gdjs._54Code.GDNewSprite3Objects2.length = 0;
gdjs._54Code.GDNewTextObjects1.length = 0;
gdjs._54Code.GDNewTextObjects2.length = 0;
gdjs._54Code.GDNewSprite4Objects1.length = 0;
gdjs._54Code.GDNewSprite4Objects2.length = 0;
gdjs._54Code.GDNewText2Objects1.length = 0;
gdjs._54Code.GDNewText2Objects2.length = 0;
gdjs._54Code.GDNewText3Objects1.length = 0;
gdjs._54Code.GDNewText3Objects2.length = 0;
gdjs._54Code.GDCursor_95951Objects1.length = 0;
gdjs._54Code.GDCursor_95951Objects2.length = 0;


return;

}

gdjs['_54Code'] = gdjs._54Code;
