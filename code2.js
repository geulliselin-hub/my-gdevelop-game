gdjs._51060_46041Code = {};
gdjs._51060_46041Code.localVariables = [];
gdjs._51060_46041Code.idToCallbackMap = new Map();
gdjs._51060_46041Code.GDNewSpriteObjects1= [];
gdjs._51060_46041Code.GDNewSpriteObjects2= [];
gdjs._51060_46041Code.GDDpad_9595ButtonObjects1= [];
gdjs._51060_46041Code.GDDpad_9595ButtonObjects2= [];
gdjs._51060_46041Code.GDDpad_9595Button2Objects1= [];
gdjs._51060_46041Code.GDDpad_9595Button2Objects2= [];
gdjs._51060_46041Code.GD_95951Objects1= [];
gdjs._51060_46041Code.GD_95951Objects2= [];
gdjs._51060_46041Code.GD_95952Objects1= [];
gdjs._51060_46041Code.GD_95952Objects2= [];
gdjs._51060_46041Code.GD_95953Objects1= [];
gdjs._51060_46041Code.GD_95953Objects2= [];
gdjs._51060_46041Code.GDDpad_9595Button3Objects1= [];
gdjs._51060_46041Code.GDDpad_9595Button3Objects2= [];
gdjs._51060_46041Code.GDDpad_9595Button4Objects1= [];
gdjs._51060_46041Code.GDDpad_9595Button4Objects2= [];
gdjs._51060_46041Code.GDDpad_9595Button5Objects1= [];
gdjs._51060_46041Code.GDDpad_9595Button5Objects2= [];
gdjs._51060_46041Code.GDDpad_9595Button6Objects1= [];
gdjs._51060_46041Code.GDDpad_9595Button6Objects2= [];
gdjs._51060_46041Code.GDDpad_9595Button7Objects1= [];
gdjs._51060_46041Code.GDDpad_9595Button7Objects2= [];


gdjs._51060_46041Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16065108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._51060_46041Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button2"), gdjs._51060_46041Code.GDDpad_9595Button2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button3"), gdjs._51060_46041Code.GDDpad_9595Button3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button4"), gdjs._51060_46041Code.GDDpad_9595Button4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button5"), gdjs._51060_46041Code.GDDpad_9595Button5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button6"), gdjs._51060_46041Code.GDDpad_9595Button6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button7"), gdjs._51060_46041Code.GDDpad_9595Button7Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._51060_46041Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._51060_46041Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._51060_46041Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button2Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button3Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button4Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button5Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button6Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button7Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button7Objects1[i].hide();
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16067084);
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16067884);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._51060_46041Code.GD_95951Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GD_95951Objects1[i].hide(false);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16068564);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._51060_46041Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._51060_46041Code.GD_95952Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GD_95952Objects1[i].hide(false);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16069452);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._51060_46041Code.GDDpad_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button2"), gdjs._51060_46041Code.GDDpad_9595Button2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button3"), gdjs._51060_46041Code.GDDpad_9595Button3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button4"), gdjs._51060_46041Code.GDDpad_9595Button4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button5"), gdjs._51060_46041Code.GDDpad_9595Button5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button6"), gdjs._51060_46041Code.GDDpad_9595Button6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button7"), gdjs._51060_46041Code.GDDpad_9595Button7Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._51060_46041Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._51060_46041Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GD_95953Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595ButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button2Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button3Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button4Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button5Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button6Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button6Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button7Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button7Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16071604);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16072540);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button"), gdjs._51060_46041Code.GDDpad_9595ButtonObjects1);
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595ButtonObjects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595ButtonObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16073556);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button2"), gdjs._51060_46041Code.GDDpad_9595Button2Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button2Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button2Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16074276);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16075220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button3"), gdjs._51060_46041Code.GDDpad_9595Button3Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button3Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button3Objects1[i].hide();
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16076188);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16077044);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button4"), gdjs._51060_46041Code.GDDpad_9595Button4Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button4Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button4Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16078012);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button5"), gdjs._51060_46041Code.GDDpad_9595Button5Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button5Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button5Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button6"), gdjs._51060_46041Code.GDDpad_9595Button6Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button6Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button6Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dpad_Button7"), gdjs._51060_46041Code.GDDpad_9595Button7Objects1);
{for(var i = 0, len = gdjs._51060_46041Code.GDDpad_9595Button7Objects1.length ;i < len;++i) {
    gdjs._51060_46041Code.GDDpad_9595Button7Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 앞", false);
}
}

}


};

gdjs._51060_46041Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51060_46041Code.GDNewSpriteObjects1.length = 0;
gdjs._51060_46041Code.GDNewSpriteObjects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button2Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button2Objects2.length = 0;
gdjs._51060_46041Code.GD_95951Objects1.length = 0;
gdjs._51060_46041Code.GD_95951Objects2.length = 0;
gdjs._51060_46041Code.GD_95952Objects1.length = 0;
gdjs._51060_46041Code.GD_95952Objects2.length = 0;
gdjs._51060_46041Code.GD_95953Objects1.length = 0;
gdjs._51060_46041Code.GD_95953Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button3Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button3Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button4Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button4Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button5Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button5Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button6Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button6Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button7Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button7Objects2.length = 0;

gdjs._51060_46041Code.eventsList0(runtimeScene);
gdjs._51060_46041Code.GDNewSpriteObjects1.length = 0;
gdjs._51060_46041Code.GDNewSpriteObjects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595ButtonObjects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595ButtonObjects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button2Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button2Objects2.length = 0;
gdjs._51060_46041Code.GD_95951Objects1.length = 0;
gdjs._51060_46041Code.GD_95951Objects2.length = 0;
gdjs._51060_46041Code.GD_95952Objects1.length = 0;
gdjs._51060_46041Code.GD_95952Objects2.length = 0;
gdjs._51060_46041Code.GD_95953Objects1.length = 0;
gdjs._51060_46041Code.GD_95953Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button3Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button3Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button4Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button4Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button5Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button5Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button6Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button6Objects2.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button7Objects1.length = 0;
gdjs._51060_46041Code.GDDpad_9595Button7Objects2.length = 0;


return;

}

gdjs['_51060_46041Code'] = gdjs._51060_46041Code;
