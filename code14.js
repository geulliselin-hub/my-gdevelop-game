gdjs._51473_50836_32_51089_54408Code = {};
gdjs._51473_50836_32_51089_54408Code.localVariables = [];
gdjs._51473_50836_32_51089_54408Code.idToCallbackMap = new Map();
gdjs._51473_50836_32_51089_54408Code.GDNewSpriteObjects1= [];
gdjs._51473_50836_32_51089_54408Code.GDNewSpriteObjects2= [];
gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1= [];
gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects2= [];
gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1= [];
gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects2= [];
gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1= [];
gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects2= [];
gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1= [];
gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects2= [];
gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1= [];
gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects2= [];
gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1= [];
gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects2= [];
gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1= [];
gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects2= [];
gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1= [];
gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects2= [];
gdjs._51473_50836_32_51089_54408Code.GDHandObjects1= [];
gdjs._51473_50836_32_51089_54408Code.GDHandObjects2= [];
gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1= [];
gdjs._51473_50836_32_51089_54408Code.GDHand2Objects2= [];


gdjs._51473_50836_32_51089_54408Code.mapOfGDgdjs_9546_959551473_959550836_959532_959551089_959554408Code_9546GDHandObjects1Objects = Hashtable.newFrom({"Hand": gdjs._51473_50836_32_51089_54408Code.GDHandObjects1});
gdjs._51473_50836_32_51089_54408Code.mapOfGDgdjs_9546_959551473_959550836_959532_959551089_959554408Code_9546GDDpad_95959595ButtonObjects1Objects = Hashtable.newFrom({"Dpad_Button": gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1});
gdjs._51473_50836_32_51089_54408Code.mapOfGDgdjs_9546_959551473_959550836_959532_959551089_959554408Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1});
gdjs._51473_50836_32_51089_54408Code.mapOfGDgdjs_9546_959551473_959550836_959532_959551089_959554408Code_9546GDHand2Objects1Objects = Hashtable.newFrom({"Hand2": gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1});
gdjs._51473_50836_32_51089_54408Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17142780);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17144236);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "1");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs._51473_50836_32_51089_54408Code.GDHandObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._51473_50836_32_51089_54408Code.mapOfGDgdjs_9546_959551473_959550836_959532_959551089_959554408Code_9546GDHandObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17144820);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1);
/* Reuse gdjs._51473_50836_32_51089_54408Code.GDHandObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDHandObjects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDHandObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._51473_50836_32_51089_54408Code.mapOfGDgdjs_9546_959551473_959550836_959532_959551089_959554408Code_9546GDDpad_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17146596);
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
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1[i].hide(false);
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17149268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hand2"), gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1[i].hide(false);
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "1");
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._51473_50836_32_51089_54408Code.mapOfGDgdjs_9546_959551473_959550836_959532_959551089_959554408Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand2"), gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1.length ;i < len;++i) {
    gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hand2"), gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._51473_50836_32_51089_54408Code.mapOfGDgdjs_9546_959551473_959550836_959532_959551089_959554408Code_9546GDHand2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "엔딩4 (괴도)", false);
}
}

}


};

gdjs._51473_50836_32_51089_54408Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51473_50836_32_51089_54408Code.GDNewSpriteObjects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSpriteObjects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDHandObjects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDHandObjects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDHand2Objects2.length = 0;

gdjs._51473_50836_32_51089_54408Code.eventsList0(runtimeScene);
gdjs._51473_50836_32_51089_54408Code.GDNewSpriteObjects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSpriteObjects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite2Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite3Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite4Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewTextObjects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewText2Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewText3Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDNewSprite5Objects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDHandObjects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDHandObjects2.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDHand2Objects1.length = 0;
gdjs._51473_50836_32_51089_54408Code.GDHand2Objects2.length = 0;


return;

}

gdjs['_51473_50836_32_51089_54408Code'] = gdjs._51473_50836_32_51089_54408Code;
