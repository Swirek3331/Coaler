"use strict";
function setCoalShow() {
    coalShow = !coalShow;
    if (coalShow) {
        unlockAll();
    }
}
function unlockAll() {
    for (let coal of Coal.coals) {
        coal.unlock();
    }
}
