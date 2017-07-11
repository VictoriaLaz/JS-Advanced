/**
 * Created by Vicky on 7/11/2017.
 */
let rgbToHexColor = require('./06. RGB to Hex').rgbToHexColor;
let expect = require('chai').expect;

describe('rgbToHex(colors)',()=>{
    describe('nominal cases (valid input', ()=>{
        it('should return #FF9EAA on (255, 158, 170)', ()=>{
            "use strict";
            expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
        });
        it('should return #0C0D0E on (12, 13, 14) ', ()=>{
            "use strict";
            expect(rgbToHexColor(12, 13, 14) ).to.be.equal('#0C0D0E');
        });
        it('should return #000000 on (0,0,0) ', ()=>{
            "use strict";
            expect(rgbToHexColor(0,0,0) ).to.be.equal('#000000');
        });
        it('should return #FFFFFF on (255,255,255) ', ()=>{
            "use strict";
            expect(rgbToHexColor(255,255,255) ).to.be.equal('#FFFFFF');
        });
    });
    describe('special cases(invalid input)', ()=>{
        "use strict";
        it('should return undefined on (-1,0,0) ', ()=>{
            "use strict";
            expect(rgbToHexColor(-1,0,0) ).to.be.undefined;
        });
        it('should return undefined on (0,-1,0) ', ()=>{
            "use strict";
            expect(rgbToHexColor(0,-1,0) ).to.be.undefined;
        });
        it('should return undefined on (0,0,-1) ', ()=>{
            "use strict";
            expect(rgbToHexColor(0,0,-1) ).to.be.undefined;
        });
        it('should return undefined on (256,0,0) ', ()=>{
            "use strict";
            expect(rgbToHexColor(256,0,0) ).to.be.undefined;
        });
        it('should return undefined on (0,256,0) ', ()=>{
            "use strict";
            expect(rgbToHexColor(0,256,0) ).to.be.undefined;
        });
        it('should return undefined on (0,0,256) ', ()=>{
            "use strict";
            expect(rgbToHexColor(0,0,256) ).to.be.undefined;
        });
        it('should return undefined on ("5", [3], {8:9}) ', ()=>{
            "use strict";
            expect(rgbToHexColor("5", [3], {8:9}) ).to.be.undefined;
        });
        it('should return undefined on () ', ()=>{
            "use strict";
            expect(rgbToHexColor()).to.be.undefined;
        });

    });

});