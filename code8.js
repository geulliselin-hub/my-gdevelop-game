gdjs._49Code = {};
gdjs._49Code.localVariables = [];
gdjs._49Code.idToCallbackMap = new Map();
gdjs._49Code.GDNewSpriteObjects1= [];
gdjs._49Code.GDNewSpriteObjects2= [];
gdjs._49Code.GDNewSprite2Objects1= [];
gdjs._49Code.GDNewSprite2Objects2= [];
gdjs._49Code.GDSquareWhiteToggleObjects1= [];
gdjs._49Code.GDSquareWhiteToggleObjects2= [];
gdjs._49Code.GDNewSprite3Objects1= [];
gdjs._49Code.GDNewSprite3Objects2= [];
gdjs._49Code.GDNewTextObjects1= [];
gdjs._49Code.GDNewTextObjects2= [];
gdjs._49Code.GDNewTiledSpriteObjects1= [];
gdjs._49Code.GDNewTiledSpriteObjects2= [];
gdjs._49Code.GDNewText2Objects1= [];
gdjs._49Code.GDNewText2Objects2= [];


gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDSquareWhiteToggleObjects1Objects = Hashtable.newFrom({"SquareWhiteToggle": gdjs._49Code.GDSquareWhiteToggleObjects1});
gdjs._49Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._49Code.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDSquareWhiteToggleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 벽 왼", false);
}
}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDNewSpriteObjects1.length = 0;
gdjs._49Code.GDNewSpriteObjects2.length = 0;
gdjs._49Code.GDNewSprite2Objects1.length = 0;
gdjs._49Code.GDNewSprite2Objects2.length = 0;
gdjs._49Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._49Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._49Code.GDNewSprite3Objects1.length = 0;
gdjs._49Code.GDNewSprite3Objects2.length = 0;
gdjs._49Code.GDNewTextObjects1.length = 0;
gdjs._49Code.GDNewTextObjects2.length = 0;
gdjs._49Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._49Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._49Code.GDNewText2Objects1.length = 0;
gdjs._49Code.GDNewText2Objects2.length = 0;

gdjs._49Code.eventsList0(runtimeScene);
gdjs._49Code.GDNewSpriteObjects1.length = 0;
gdjs._49Code.GDNewSpriteObjects2.length = 0;
gdjs._49Code.GDNewSprite2Objects1.length = 0;
gdjs._49Code.GDNewSprite2Objects2.length = 0;
gdjs._49Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._49Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._49Code.GDNewSprite3Objects1.length = 0;
gdjs._49Code.GDNewSprite3Objects2.length = 0;
gdjs._49Code.GDNewTextObjects1.length = 0;
gdjs._49Code.GDNewTextObjects2.length = 0;
gdjs._49Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._49Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._49Code.GDNewText2Objects1.length = 0;
gdjs._49Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_49Code'] = gdjs._49Code;
