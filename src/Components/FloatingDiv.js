import React, { useEffect, useRef } from 'react';

const FloatingDiv = () => {
    var mDiv = document.createElement("div");
    mDiv.className = "cTrailDiv";
    document.body.appendChild(mDiv);
    return mDiv;
};

export default FloatingDiv;