gdjs._50644_463771_32_40_53448_52636_41Code = {};
gdjs._50644_463771_32_40_53448_52636_41Code.localVariables = [];
gdjs._50644_463771_32_40_53448_52636_41Code.idToCallbackMap = new Map();
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSpriteObjects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSpriteObjects2= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects2= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects2= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects2= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects2= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects2= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects2= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects2= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects2= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects1= [];
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects2= [];


gdjs._50644_463771_32_40_53448_52636_41Code.mapOfGDgdjs_9546_959550644_9595463771_959532_959540_959553448_959552636_959541Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSpriteObjects1});
gdjs._50644_463771_32_40_53448_52636_41Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16900156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._50644_463771_32_40_53448_52636_41Code.mapOfGDgdjs_9546_959550644_9595463771_959532_959540_959553448_959552636_959541Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16902036);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16903420);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1[i].hide(false);
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16904124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1[i].hide(false);
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16905164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1[i].hide(false);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16905924);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "스타팅", false);
}
}

}


};

gdjs._50644_463771_32_40_53448_52636_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSpriteObjects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSpriteObjects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects2.length = 0;

gdjs._50644_463771_32_40_53448_52636_41Code.eventsList0(runtimeScene);
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSpriteObjects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSpriteObjects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite2Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewTextObjects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText2Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText3Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText4Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite3Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewSprite4Objects2.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects1.length = 0;
gdjs._50644_463771_32_40_53448_52636_41Code.GDNewText5Objects2.length = 0;


return;

}

gdjs['_50644_463771_32_40_53448_52636_41Code'] = gdjs._50644_463771_32_40_53448_52636_41Code;
