gdjs._53Code = {};
gdjs._53Code.localVariables = [];
gdjs._53Code.idToCallbackMap = new Map();
gdjs._53Code.GDNewSpriteObjects1= [];
gdjs._53Code.GDNewSpriteObjects2= [];
gdjs._53Code.GDNewSprite2Objects1= [];
gdjs._53Code.GDNewSprite2Objects2= [];
gdjs._53Code.GDSquareWhiteToggleObjects1= [];
gdjs._53Code.GDSquareWhiteToggleObjects2= [];
gdjs._53Code.GDNewSprite3Objects1= [];
gdjs._53Code.GDNewSprite3Objects2= [];
gdjs._53Code.GDNewTextObjects1= [];
gdjs._53Code.GDNewTextObjects2= [];
gdjs._53Code.GDNewText2Objects1= [];
gdjs._53Code.GDNewText2Objects2= [];
gdjs._53Code.GDNewSprite4Objects1= [];
gdjs._53Code.GDNewSprite4Objects2= [];
gdjs._53Code.GDNewSprite5Objects1= [];
gdjs._53Code.GDNewSprite5Objects2= [];
gdjs._53Code.GDNewSprite6Objects1= [];
gdjs._53Code.GDNewSprite6Objects2= [];
gdjs._53Code.GDDpad_9595ButtonObjects1= [];
gdjs._53Code.GDDpad_9595ButtonObjects2= [];
gdjs._53Code.GDDpad_9595Button2Objects1= [];
gdjs._53Code.GDDpad_9595Button2Objects2= [];
gdjs._53Code.GDStarObjects1= [];
gdjs._53Code.GDStarObjects2= [];


gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs._53Code.GDStarObjects1});
gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._53Code.GDNewSprite4Objects1});
gdjs._53Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17056524);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._53Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button2"), gdjs._53Code.GDDpad_9595Button2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._53Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._53Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._53Code.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs._53Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewSprite5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewSprite6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._53Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDDpad_9595Button2Objects1.length ;i < len;++i) {
    gdjs._53Code.GDDpad_9595Button2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs._53Code.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDStarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17057588);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._53Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._53Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._53Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._53Code.GDNewText2Objects1);
/* Reuse gdjs._53Code.GDStarObjects1 */
{for(var i = 0, len = gdjs._53Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewSprite4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._53Code.GDStarObjects1.length ;i < len;++i) {
    gdjs._53Code.GDStarObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._53Code.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewText2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._53Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._53Code.mapOfGDgdjs_9546_959553Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17059012);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._53Code.GDDpad_9595ButtonObjects1);
/* Reuse gdjs._53Code.GDNewSprite4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._53Code.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs._53Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewSprite5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._53Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._53Code.GDDpad_9595ButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._53Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button2"), gdjs._53Code.GDDpad_9595Button2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._53Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._53Code.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs._53Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._53Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDDpad_9595Button2Objects1.length ;i < len;++i) {
    gdjs._53Code.GDDpad_9595Button2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._53Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewSprite5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._53Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._53Code.GDNewSprite6Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "엔딩3 (천사)", false);
}
}

}


};

gdjs._53Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._53Code.GDNewSpriteObjects1.length = 0;
gdjs._53Code.GDNewSpriteObjects2.length = 0;
gdjs._53Code.GDNewSprite2Objects1.length = 0;
gdjs._53Code.GDNewSprite2Objects2.length = 0;
gdjs._53Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._53Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._53Code.GDNewSprite3Objects1.length = 0;
gdjs._53Code.GDNewSprite3Objects2.length = 0;
gdjs._53Code.GDNewTextObjects1.length = 0;
gdjs._53Code.GDNewTextObjects2.length = 0;
gdjs._53Code.GDNewText2Objects1.length = 0;
gdjs._53Code.GDNewText2Objects2.length = 0;
gdjs._53Code.GDNewSprite4Objects1.length = 0;
gdjs._53Code.GDNewSprite4Objects2.length = 0;
gdjs._53Code.GDNewSprite5Objects1.length = 0;
gdjs._53Code.GDNewSprite5Objects2.length = 0;
gdjs._53Code.GDNewSprite6Objects1.length = 0;
gdjs._53Code.GDNewSprite6Objects2.length = 0;
gdjs._53Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._53Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._53Code.GDDpad_9595Button2Objects1.length = 0;
gdjs._53Code.GDDpad_9595Button2Objects2.length = 0;
gdjs._53Code.GDStarObjects1.length = 0;
gdjs._53Code.GDStarObjects2.length = 0;

gdjs._53Code.eventsList0(runtimeScene);
gdjs._53Code.GDNewSpriteObjects1.length = 0;
gdjs._53Code.GDNewSpriteObjects2.length = 0;
gdjs._53Code.GDNewSprite2Objects1.length = 0;
gdjs._53Code.GDNewSprite2Objects2.length = 0;
gdjs._53Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._53Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._53Code.GDNewSprite3Objects1.length = 0;
gdjs._53Code.GDNewSprite3Objects2.length = 0;
gdjs._53Code.GDNewTextObjects1.length = 0;
gdjs._53Code.GDNewTextObjects2.length = 0;
gdjs._53Code.GDNewText2Objects1.length = 0;
gdjs._53Code.GDNewText2Objects2.length = 0;
gdjs._53Code.GDNewSprite4Objects1.length = 0;
gdjs._53Code.GDNewSprite4Objects2.length = 0;
gdjs._53Code.GDNewSprite5Objects1.length = 0;
gdjs._53Code.GDNewSprite5Objects2.length = 0;
gdjs._53Code.GDNewSprite6Objects1.length = 0;
gdjs._53Code.GDNewSprite6Objects2.length = 0;
gdjs._53Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._53Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._53Code.GDDpad_9595Button2Objects1.length = 0;
gdjs._53Code.GDDpad_9595Button2Objects2.length = 0;
gdjs._53Code.GDStarObjects1.length = 0;
gdjs._53Code.GDStarObjects2.length = 0;


return;

}

gdjs['_53Code'] = gdjs._53Code;
