gdjs._52Code = {};
gdjs._52Code.localVariables = [];
gdjs._52Code.idToCallbackMap = new Map();
gdjs._52Code.GDNewSpriteObjects1= [];
gdjs._52Code.GDNewSpriteObjects2= [];
gdjs._52Code.GDNewSprite2Objects1= [];
gdjs._52Code.GDNewSprite2Objects2= [];
gdjs._52Code.GDSquareWhiteToggleObjects1= [];
gdjs._52Code.GDSquareWhiteToggleObjects2= [];
gdjs._52Code.GDNewSprite3Objects1= [];
gdjs._52Code.GDNewSprite3Objects2= [];
gdjs._52Code.GDNewTextObjects1= [];
gdjs._52Code.GDNewTextObjects2= [];
gdjs._52Code.GDNewText2Objects1= [];
gdjs._52Code.GDNewText2Objects2= [];


gdjs._52Code.mapOfGDgdjs_9546_959552Code_9546GDSquareWhiteToggleObjects1Objects = Hashtable.newFrom({"SquareWhiteToggle": gdjs._52Code.GDSquareWhiteToggleObjects1});
gdjs._52Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._52Code.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._52Code.mapOfGDgdjs_9546_959552Code_9546GDSquareWhiteToggleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 벽 오", false);
}
}

}


};

gdjs._52Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._52Code.GDNewSpriteObjects1.length = 0;
gdjs._52Code.GDNewSpriteObjects2.length = 0;
gdjs._52Code.GDNewSprite2Objects1.length = 0;
gdjs._52Code.GDNewSprite2Objects2.length = 0;
gdjs._52Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._52Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._52Code.GDNewSprite3Objects1.length = 0;
gdjs._52Code.GDNewSprite3Objects2.length = 0;
gdjs._52Code.GDNewTextObjects1.length = 0;
gdjs._52Code.GDNewTextObjects2.length = 0;
gdjs._52Code.GDNewText2Objects1.length = 0;
gdjs._52Code.GDNewText2Objects2.length = 0;

gdjs._52Code.eventsList0(runtimeScene);
gdjs._52Code.GDNewSpriteObjects1.length = 0;
gdjs._52Code.GDNewSpriteObjects2.length = 0;
gdjs._52Code.GDNewSprite2Objects1.length = 0;
gdjs._52Code.GDNewSprite2Objects2.length = 0;
gdjs._52Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._52Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._52Code.GDNewSprite3Objects1.length = 0;
gdjs._52Code.GDNewSprite3Objects2.length = 0;
gdjs._52Code.GDNewTextObjects1.length = 0;
gdjs._52Code.GDNewTextObjects2.length = 0;
gdjs._52Code.GDNewText2Objects1.length = 0;
gdjs._52Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_52Code'] = gdjs._52Code;
