gdjs._48120_49696_44288_32_51060_46041Code = {};
gdjs._48120_49696_44288_32_51060_46041Code.localVariables = [];
gdjs._48120_49696_44288_32_51060_46041Code.idToCallbackMap = new Map();
gdjs._48120_49696_44288_32_51060_46041Code.GDNewSpriteObjects1= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDNewSpriteObjects2= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects1= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects2= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595RightObjects1= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595RightObjects2= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects2= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDNewTextObjects1= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDNewTextObjects2= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDNewText2Objects1= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDNewText2Objects2= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1= [];
gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects2= [];


gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDChevron_95959595Arrow_95959595LeftObjects1Objects = Hashtable.newFrom({"Chevron_Arrow_Left": gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects1});
gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDChevron_95959595Arrow_95959595RightObjects1Objects = Hashtable.newFrom({"Chevron_Arrow_Right": gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595RightObjects1});
gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDChevron_95959595Arrow_95959595LeftObjects1Objects = Hashtable.newFrom({"Chevron_Arrow_Left": gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects1});
gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDSquareWhiteToggleObjects1Objects = Hashtable.newFrom({"SquareWhiteToggle": gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1});
gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1});
gdjs._48120_49696_44288_32_51060_46041Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Chevron_Arrow_Left"), gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDChevron_95959595Arrow_95959595LeftObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16216452);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 벽 왼", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chevron_Arrow_Right"), gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595RightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDChevron_95959595Arrow_95959595RightObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 벽 오", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chevron_Arrow_Left"), gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDChevron_95959595Arrow_95959595LeftObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16219916);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1);
{for(var i = 0, len = gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1);
{for(var i = 0, len = gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDSquareWhiteToggleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "중요 작품", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1);
{for(var i = 0, len = gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1.length ;i < len;++i) {
    gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._48120_49696_44288_32_51060_46041Code.mapOfGDgdjs_9546_959548120_959549696_959544288_959532_959551060_959546041Code_9546GDExitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "엔딩1 (탈출)", false);
}
}

}


};

gdjs._48120_49696_44288_32_51060_46041Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._48120_49696_44288_32_51060_46041Code.GDNewSpriteObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewSpriteObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595RightObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595RightObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewTextObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewTextObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewText2Objects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewText2Objects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects2.length = 0;

gdjs._48120_49696_44288_32_51060_46041Code.eventsList0(runtimeScene);
gdjs._48120_49696_44288_32_51060_46041Code.GDNewSpriteObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewSpriteObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595RightObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDChevron_9595Arrow_9595RightObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewTextObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewTextObjects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewText2Objects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDNewText2Objects2.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects1.length = 0;
gdjs._48120_49696_44288_32_51060_46041Code.GDExitObjects2.length = 0;


return;

}

gdjs['_48120_49696_44288_32_51060_46041Code'] = gdjs._48120_49696_44288_32_51060_46041Code;
