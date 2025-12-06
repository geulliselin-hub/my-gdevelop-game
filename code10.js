gdjs._51Code = {};
gdjs._51Code.localVariables = [];
gdjs._51Code.idToCallbackMap = new Map();
gdjs._51Code.GDNewSpriteObjects1= [];
gdjs._51Code.GDNewSpriteObjects2= [];
gdjs._51Code.GDNewSprite2Objects1= [];
gdjs._51Code.GDNewSprite2Objects2= [];
gdjs._51Code.GDSquareWhiteToggleObjects1= [];
gdjs._51Code.GDSquareWhiteToggleObjects2= [];
gdjs._51Code.GDNewSprite3Objects1= [];
gdjs._51Code.GDNewSprite3Objects2= [];
gdjs._51Code.GDNewTextObjects1= [];
gdjs._51Code.GDNewTextObjects2= [];
gdjs._51Code.GDNewText2Objects1= [];
gdjs._51Code.GDNewText2Objects2= [];
gdjs._51Code.GDNewParticleEmitterObjects1= [];
gdjs._51Code.GDNewParticleEmitterObjects2= [];
gdjs._51Code.GDNewText3Objects1= [];
gdjs._51Code.GDNewText3Objects2= [];
gdjs._51Code.GDMagnifying_9595GlassObjects1= [];
gdjs._51Code.GDMagnifying_9595GlassObjects2= [];
gdjs._51Code.GD_9548520Objects1= [];
gdjs._51Code.GD_9548520Objects2= [];
gdjs._51Code.GDNewText4Objects1= [];
gdjs._51Code.GDNewText4Objects2= [];


gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSquareWhiteToggleObjects1Objects = Hashtable.newFrom({"SquareWhiteToggle": gdjs._51Code.GDSquareWhiteToggleObjects1});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMagnifying_95959595GlassObjects1Objects = Hashtable.newFrom({"Magnifying_Glass": gdjs._51Code.GDMagnifying_9595GlassObjects1});
gdjs._51Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewParticleEmitter"), gdjs._51Code.GDNewParticleEmitterObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._51Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("불"), gdjs._51Code.GD_9548520Objects1);
{for(var i = 0, len = gdjs._51Code.GDNewParticleEmitterObjects1.length ;i < len;++i) {
    gdjs._51Code.GDNewParticleEmitterObjects1[i].hide();
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "불");
}
{for(var i = 0, len = gdjs._51Code.GD_9548520Objects1.length ;i < len;++i) {
    gdjs._51Code.GD_9548520Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._51Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._51Code.GDNewText4Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._51Code.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSquareWhiteToggleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "미술관 벽 왼", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Magnifying_Glass"), gdjs._51Code.GDMagnifying_9595GlassObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDMagnifying_95959595GlassObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
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
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs._51Code.GDSquareWhiteToggleObjects1);
gdjs.copyArray(runtimeScene.getObjects("불"), gdjs._51Code.GD_9548520Objects1);
{for(var i = 0, len = gdjs._51Code.GD_9548520Objects1.length ;i < len;++i) {
    gdjs._51Code.GD_9548520Objects1[i].hide(false);
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "버튼");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "불");
}
{for(var i = 0, len = gdjs._51Code.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs._51Code.GDSquareWhiteToggleObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._51Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs._51Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._51Code.GDNewText4Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "엔딩2 (불)", false);
}
}

}


};

gdjs._51Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51Code.GDNewSpriteObjects1.length = 0;
gdjs._51Code.GDNewSpriteObjects2.length = 0;
gdjs._51Code.GDNewSprite2Objects1.length = 0;
gdjs._51Code.GDNewSprite2Objects2.length = 0;
gdjs._51Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._51Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._51Code.GDNewSprite3Objects1.length = 0;
gdjs._51Code.GDNewSprite3Objects2.length = 0;
gdjs._51Code.GDNewTextObjects1.length = 0;
gdjs._51Code.GDNewTextObjects2.length = 0;
gdjs._51Code.GDNewText2Objects1.length = 0;
gdjs._51Code.GDNewText2Objects2.length = 0;
gdjs._51Code.GDNewParticleEmitterObjects1.length = 0;
gdjs._51Code.GDNewParticleEmitterObjects2.length = 0;
gdjs._51Code.GDNewText3Objects1.length = 0;
gdjs._51Code.GDNewText3Objects2.length = 0;
gdjs._51Code.GDMagnifying_9595GlassObjects1.length = 0;
gdjs._51Code.GDMagnifying_9595GlassObjects2.length = 0;
gdjs._51Code.GD_9548520Objects1.length = 0;
gdjs._51Code.GD_9548520Objects2.length = 0;
gdjs._51Code.GDNewText4Objects1.length = 0;
gdjs._51Code.GDNewText4Objects2.length = 0;

gdjs._51Code.eventsList0(runtimeScene);
gdjs._51Code.GDNewSpriteObjects1.length = 0;
gdjs._51Code.GDNewSpriteObjects2.length = 0;
gdjs._51Code.GDNewSprite2Objects1.length = 0;
gdjs._51Code.GDNewSprite2Objects2.length = 0;
gdjs._51Code.GDSquareWhiteToggleObjects1.length = 0;
gdjs._51Code.GDSquareWhiteToggleObjects2.length = 0;
gdjs._51Code.GDNewSprite3Objects1.length = 0;
gdjs._51Code.GDNewSprite3Objects2.length = 0;
gdjs._51Code.GDNewTextObjects1.length = 0;
gdjs._51Code.GDNewTextObjects2.length = 0;
gdjs._51Code.GDNewText2Objects1.length = 0;
gdjs._51Code.GDNewText2Objects2.length = 0;
gdjs._51Code.GDNewParticleEmitterObjects1.length = 0;
gdjs._51Code.GDNewParticleEmitterObjects2.length = 0;
gdjs._51Code.GDNewText3Objects1.length = 0;
gdjs._51Code.GDNewText3Objects2.length = 0;
gdjs._51Code.GDMagnifying_9595GlassObjects1.length = 0;
gdjs._51Code.GDMagnifying_9595GlassObjects2.length = 0;
gdjs._51Code.GD_9548520Objects1.length = 0;
gdjs._51Code.GD_9548520Objects2.length = 0;
gdjs._51Code.GDNewText4Objects1.length = 0;
gdjs._51Code.GDNewText4Objects2.length = 0;


return;

}

gdjs['_51Code'] = gdjs._51Code;
