(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // <define:__KEEP_PRECACHE__>
  var define_KEEP_PRECACHE_default;
  var init_define_KEEP_PRECACHE = __esm({
    "<define:__KEEP_PRECACHE__>"() {
      define_KEEP_PRECACHE_default = ["/", "/app.css", "/assets/bgm/grace-on-my-way-lite.mp3", "/assets/bgm/grace-on-my-way.mp3", "/assets/fonts/ahyoung.woff2", "/assets/fonts/cherry.woff2", "/assets/fonts/coco.woff2", "/assets/fonts/fonts.json", "/assets/fonts/free-500.woff2", "/assets/fonts/free-700.woff2", "/assets/fonts/free-800.woff2", "/assets/fonts/gooltokki.woff2", "/assets/fonts/gw-hyunok.woff2", "/assets/fonts/gw-teunteun.woff2", "/assets/fonts/kedu-400.woff2", "/assets/fonts/kedu-700.woff2", "/assets/fonts/onkonkon.woff2", "/assets/fonts/pre-400.woff2", "/assets/fonts/pre-600.woff2", "/assets/fonts/pre-700.woff2", "/assets/fonts/wildgag.woff2", "/assets/fonts/wonju-b.woff2", "/assets/fonts/yclover-400.woff2", "/assets/fonts/yclover-700.woff2", "/assets/icon-128.png", "/assets/icon-180.png", "/assets/icon-192.png", "/assets/icon-512.png", "/assets/icon.svg", "/assets/og-card.png", "/assets/og.png", "/bgm.js", "/calc.js", "/index.html", "/manifest.webmanifest", "/palettes.js", "/patterns.js", "/privacy.html", "/terms.html"];
    }
  });

  // <define:__KEEP_PUBKEY__>
  var define_KEEP_PUBKEY_default;
  var init_define_KEEP_PUBKEY = __esm({
    "<define:__KEEP_PUBKEY__>"() {
      define_KEEP_PUBKEY_default = { kty: "EC", crv: "P-256", x: "dqiPr_gbgv1IcFNIV-rZZ0G8mGhksu5LTf-N9xosICM", y: "c37x0jgGpottNgwaQks-M5Na1r9BKPfIr710GV71_g4" };
    }
  });

  // node_modules/qrcode/lib/can-promise.js
  var require_can_promise = __commonJS({
    "node_modules/qrcode/lib/can-promise.js"(exports, module) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      module.exports = function() {
        return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
      };
    }
  });

  // node_modules/qrcode/lib/core/utils.js
  var require_utils = __commonJS({
    "node_modules/qrcode/lib/core/utils.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var toSJISFunction;
      var CODEWORDS_COUNT = [
        0,
        // Not used
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
      ];
      exports.getSymbolSize = function getSymbolSize(version) {
        if (!version) throw new Error('"version" cannot be null or undefined');
        if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
        return version * 4 + 17;
      };
      exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
        return CODEWORDS_COUNT[version];
      };
      exports.getBCHDigit = function(data) {
        let digit = 0;
        while (data !== 0) {
          digit++;
          data >>>= 1;
        }
        return digit;
      };
      exports.setToSJISFunction = function setToSJISFunction(f) {
        if (typeof f !== "function") {
          throw new Error('"toSJISFunc" is not a valid function.');
        }
        toSJISFunction = f;
      };
      exports.isKanjiModeEnabled = function() {
        return typeof toSJISFunction !== "undefined";
      };
      exports.toSJIS = function toSJIS(kanji) {
        return toSJISFunction(kanji);
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-level.js
  var require_error_correction_level = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      exports.L = { bit: 1 };
      exports.M = { bit: 0 };
      exports.Q = { bit: 3 };
      exports.H = { bit: 2 };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "l":
          case "low":
            return exports.L;
          case "m":
          case "medium":
            return exports.M;
          case "q":
          case "quartile":
            return exports.Q;
          case "h":
          case "high":
            return exports.H;
          default:
            throw new Error("Unknown EC Level: " + string);
        }
      }
      exports.isValid = function isValid(level) {
        return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
      };
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/bit-buffer.js
  var require_bit_buffer = __commonJS({
    "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      function BitBuffer() {
        this.buffer = [];
        this.length = 0;
      }
      BitBuffer.prototype = {
        get: function(index) {
          const bufIndex = Math.floor(index / 8);
          return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
        },
        put: function(num, length) {
          for (let i = 0; i < length; i++) {
            this.putBit((num >>> length - i - 1 & 1) === 1);
          }
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(bit) {
          const bufIndex = Math.floor(this.length / 8);
          if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
          }
          if (bit) {
            this.buffer[bufIndex] |= 128 >>> this.length % 8;
          }
          this.length++;
        }
      };
      module.exports = BitBuffer;
    }
  });

  // node_modules/qrcode/lib/core/bit-matrix.js
  var require_bit_matrix = __commonJS({
    "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      function BitMatrix(size) {
        if (!size || size < 1) {
          throw new Error("BitMatrix size must be defined and greater than 0");
        }
        this.size = size;
        this.data = new Uint8Array(size * size);
        this.reservedBit = new Uint8Array(size * size);
      }
      BitMatrix.prototype.set = function(row, col, value, reserved) {
        const index = row * this.size + col;
        this.data[index] = value;
        if (reserved) this.reservedBit[index] = true;
      };
      BitMatrix.prototype.get = function(row, col) {
        return this.data[row * this.size + col];
      };
      BitMatrix.prototype.xor = function(row, col, value) {
        this.data[row * this.size + col] ^= value;
      };
      BitMatrix.prototype.isReserved = function(row, col) {
        return this.reservedBit[row * this.size + col];
      };
      module.exports = BitMatrix;
    }
  });

  // node_modules/qrcode/lib/core/alignment-pattern.js
  var require_alignment_pattern = __commonJS({
    "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var getSymbolSize = require_utils().getSymbolSize;
      exports.getRowColCoords = function getRowColCoords(version) {
        if (version === 1) return [];
        const posCount = Math.floor(version / 7) + 2;
        const size = getSymbolSize(version);
        const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
        const positions = [size - 7];
        for (let i = 1; i < posCount - 1; i++) {
          positions[i] = positions[i - 1] - intervals;
        }
        positions.push(6);
        return positions.reverse();
      };
      exports.getPositions = function getPositions(version) {
        const coords = [];
        const pos = exports.getRowColCoords(version);
        const posLength = pos.length;
        for (let i = 0; i < posLength; i++) {
          for (let j = 0; j < posLength; j++) {
            if (i === 0 && j === 0 || // top-left
            i === 0 && j === posLength - 1 || // bottom-left
            i === posLength - 1 && j === 0) {
              continue;
            }
            coords.push([pos[i], pos[j]]);
          }
        }
        return coords;
      };
    }
  });

  // node_modules/qrcode/lib/core/finder-pattern.js
  var require_finder_pattern = __commonJS({
    "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var getSymbolSize = require_utils().getSymbolSize;
      var FINDER_PATTERN_SIZE = 7;
      exports.getPositions = function getPositions(version) {
        const size = getSymbolSize(version);
        return [
          // top-left
          [0, 0],
          // top-right
          [size - FINDER_PATTERN_SIZE, 0],
          // bottom-left
          [0, size - FINDER_PATTERN_SIZE]
        ];
      };
    }
  });

  // node_modules/qrcode/lib/core/mask-pattern.js
  var require_mask_pattern = __commonJS({
    "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      exports.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      };
      var PenaltyScores = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
      };
      exports.isValid = function isValid(mask) {
        return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
      };
      exports.from = function from(value) {
        return exports.isValid(value) ? parseInt(value, 10) : void 0;
      };
      exports.getPenaltyN1 = function getPenaltyN1(data) {
        const size = data.size;
        let points = 0;
        let sameCountCol = 0;
        let sameCountRow = 0;
        let lastCol = null;
        let lastRow = null;
        for (let row = 0; row < size; row++) {
          sameCountCol = sameCountRow = 0;
          lastCol = lastRow = null;
          for (let col = 0; col < size; col++) {
            let module2 = data.get(row, col);
            if (module2 === lastCol) {
              sameCountCol++;
            } else {
              if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
              lastCol = module2;
              sameCountCol = 1;
            }
            module2 = data.get(col, row);
            if (module2 === lastRow) {
              sameCountRow++;
            } else {
              if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
              lastRow = module2;
              sameCountRow = 1;
            }
          }
          if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
          if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        }
        return points;
      };
      exports.getPenaltyN2 = function getPenaltyN2(data) {
        const size = data.size;
        let points = 0;
        for (let row = 0; row < size - 1; row++) {
          for (let col = 0; col < size - 1; col++) {
            const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
            if (last === 4 || last === 0) points++;
          }
        }
        return points * PenaltyScores.N2;
      };
      exports.getPenaltyN3 = function getPenaltyN3(data) {
        const size = data.size;
        let points = 0;
        let bitsCol = 0;
        let bitsRow = 0;
        for (let row = 0; row < size; row++) {
          bitsCol = bitsRow = 0;
          for (let col = 0; col < size; col++) {
            bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
            if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
            bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
            if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
          }
        }
        return points * PenaltyScores.N3;
      };
      exports.getPenaltyN4 = function getPenaltyN4(data) {
        let darkCount = 0;
        const modulesCount = data.data.length;
        for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
        const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
        return k * PenaltyScores.N4;
      };
      function getMaskAt(maskPattern, i, j) {
        switch (maskPattern) {
          case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
          case exports.Patterns.PATTERN001:
            return i % 2 === 0;
          case exports.Patterns.PATTERN010:
            return j % 3 === 0;
          case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
          case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
          case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
          case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
          case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
          default:
            throw new Error("bad maskPattern:" + maskPattern);
        }
      }
      exports.applyMask = function applyMask(pattern, data) {
        const size = data.size;
        for (let col = 0; col < size; col++) {
          for (let row = 0; row < size; row++) {
            if (data.isReserved(row, col)) continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
          }
        }
      };
      exports.getBestMask = function getBestMask(data, setupFormatFunc) {
        const numPatterns = Object.keys(exports.Patterns).length;
        let bestPattern = 0;
        let lowerPenalty = Infinity;
        for (let p = 0; p < numPatterns; p++) {
          setupFormatFunc(p);
          exports.applyMask(p, data);
          const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
          exports.applyMask(p, data);
          if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
          }
        }
        return bestPattern;
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-code.js
  var require_error_correction_code = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var ECLevel = require_error_correction_level();
      var EC_BLOCKS_TABLE = [
        // L  M  Q  H
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
      ];
      var EC_CODEWORDS_TABLE = [
        // L  M  Q  H
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
      ];
      exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
      exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/galois-field.js
  var require_galois_field = __commonJS({
    "node_modules/qrcode/lib/core/galois-field.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var EXP_TABLE = new Uint8Array(512);
      var LOG_TABLE = new Uint8Array(256);
      (function initTables() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
          EXP_TABLE[i] = x;
          LOG_TABLE[x] = i;
          x <<= 1;
          if (x & 256) {
            x ^= 285;
          }
        }
        for (let i = 255; i < 512; i++) {
          EXP_TABLE[i] = EXP_TABLE[i - 255];
        }
      })();
      exports.log = function log(n) {
        if (n < 1) throw new Error("log(" + n + ")");
        return LOG_TABLE[n];
      };
      exports.exp = function exp(n) {
        return EXP_TABLE[n];
      };
      exports.mul = function mul(x, y) {
        if (x === 0 || y === 0) return 0;
        return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
      };
    }
  });

  // node_modules/qrcode/lib/core/polynomial.js
  var require_polynomial = __commonJS({
    "node_modules/qrcode/lib/core/polynomial.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var GF = require_galois_field();
      exports.mul = function mul(p1, p2) {
        const coeff = new Uint8Array(p1.length + p2.length - 1);
        for (let i = 0; i < p1.length; i++) {
          for (let j = 0; j < p2.length; j++) {
            coeff[i + j] ^= GF.mul(p1[i], p2[j]);
          }
        }
        return coeff;
      };
      exports.mod = function mod(divident, divisor) {
        let result = new Uint8Array(divident);
        while (result.length - divisor.length >= 0) {
          const coeff = result[0];
          for (let i = 0; i < divisor.length; i++) {
            result[i] ^= GF.mul(divisor[i], coeff);
          }
          let offset = 0;
          while (offset < result.length && result[offset] === 0) offset++;
          result = result.slice(offset);
        }
        return result;
      };
      exports.generateECPolynomial = function generateECPolynomial(degree) {
        let poly = new Uint8Array([1]);
        for (let i = 0; i < degree; i++) {
          poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
        }
        return poly;
      };
    }
  });

  // node_modules/qrcode/lib/core/reed-solomon-encoder.js
  var require_reed_solomon_encoder = __commonJS({
    "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Polynomial = require_polynomial();
      function ReedSolomonEncoder(degree) {
        this.genPoly = void 0;
        this.degree = degree;
        if (this.degree) this.initialize(this.degree);
      }
      ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
        this.degree = degree;
        this.genPoly = Polynomial.generateECPolynomial(this.degree);
      };
      ReedSolomonEncoder.prototype.encode = function encode(data) {
        if (!this.genPoly) {
          throw new Error("Encoder not initialized");
        }
        const paddedData = new Uint8Array(data.length + this.degree);
        paddedData.set(data);
        const remainder = Polynomial.mod(paddedData, this.genPoly);
        const start = this.degree - remainder.length;
        if (start > 0) {
          const buff = new Uint8Array(this.degree);
          buff.set(remainder, start);
          return buff;
        }
        return remainder;
      };
      module.exports = ReedSolomonEncoder;
    }
  });

  // node_modules/qrcode/lib/core/version-check.js
  var require_version_check = __commonJS({
    "node_modules/qrcode/lib/core/version-check.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      exports.isValid = function isValid(version) {
        return !isNaN(version) && version >= 1 && version <= 40;
      };
    }
  });

  // node_modules/qrcode/lib/core/regex.js
  var require_regex = __commonJS({
    "node_modules/qrcode/lib/core/regex.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var numeric = "[0-9]+";
      var alphanumeric = "[A-Z $%*+\\-./:]+";
      var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      kanji = kanji.replace(/u/g, "\\u");
      var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
      exports.KANJI = new RegExp(kanji, "g");
      exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      exports.BYTE = new RegExp(byte, "g");
      exports.NUMERIC = new RegExp(numeric, "g");
      exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
      var TEST_KANJI = new RegExp("^" + kanji + "$");
      var TEST_NUMERIC = new RegExp("^" + numeric + "$");
      var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      exports.testKanji = function testKanji(str) {
        return TEST_KANJI.test(str);
      };
      exports.testNumeric = function testNumeric(str) {
        return TEST_NUMERIC.test(str);
      };
      exports.testAlphanumeric = function testAlphanumeric(str) {
        return TEST_ALPHANUMERIC.test(str);
      };
    }
  });

  // node_modules/qrcode/lib/core/mode.js
  var require_mode = __commonJS({
    "node_modules/qrcode/lib/core/mode.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var VersionCheck = require_version_check();
      var Regex = require_regex();
      exports.NUMERIC = {
        id: "Numeric",
        bit: 1 << 0,
        ccBits: [10, 12, 14]
      };
      exports.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 1 << 1,
        ccBits: [9, 11, 13]
      };
      exports.BYTE = {
        id: "Byte",
        bit: 1 << 2,
        ccBits: [8, 16, 16]
      };
      exports.KANJI = {
        id: "Kanji",
        bit: 1 << 3,
        ccBits: [8, 10, 12]
      };
      exports.MIXED = {
        bit: -1
      };
      exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
        if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid version: " + version);
        }
        if (version >= 1 && version < 10) return mode.ccBits[0];
        else if (version < 27) return mode.ccBits[1];
        return mode.ccBits[2];
      };
      exports.getBestModeForData = function getBestModeForData(dataStr) {
        if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
        else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
        else if (Regex.testKanji(dataStr)) return exports.KANJI;
        else return exports.BYTE;
      };
      exports.toString = function toString(mode) {
        if (mode && mode.id) return mode.id;
        throw new Error("Invalid mode");
      };
      exports.isValid = function isValid(mode) {
        return mode && mode.bit && mode.ccBits;
      };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "numeric":
            return exports.NUMERIC;
          case "alphanumeric":
            return exports.ALPHANUMERIC;
          case "kanji":
            return exports.KANJI;
          case "byte":
            return exports.BYTE;
          default:
            throw new Error("Unknown mode: " + string);
        }
      }
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/version.js
  var require_version = __commonJS({
    "node_modules/qrcode/lib/core/version.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Utils = require_utils();
      var ECCode = require_error_correction_code();
      var ECLevel = require_error_correction_level();
      var Mode = require_mode();
      var VersionCheck = require_version_check();
      var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
      var G18_BCH = Utils.getBCHDigit(G18);
      function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      function getReservedBitsCount(mode, version) {
        return Mode.getCharCountIndicator(mode, version) + 4;
      }
      function getTotalBitsFromDataArray(segments, version) {
        let totalBits = 0;
        segments.forEach(function(data) {
          const reservedBits = getReservedBitsCount(data.mode, version);
          totalBits += reservedBits + data.getBitsLength();
        });
        return totalBits;
      }
      function getBestVersionForMixedData(segments, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          const length = getTotalBitsFromDataArray(segments, currentVersion);
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      exports.from = function from(value, defaultValue) {
        if (VersionCheck.isValid(value)) {
          return parseInt(value, 10);
        }
        return defaultValue;
      };
      exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid QR Code version");
        }
        if (typeof mode === "undefined") mode = Mode.BYTE;
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (mode === Mode.MIXED) return dataTotalCodewordsBits;
        const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
        switch (mode) {
          case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
          case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
          case Mode.KANJI:
            return Math.floor(usableBits / 13);
          case Mode.BYTE:
          default:
            return Math.floor(usableBits / 8);
        }
      };
      exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
        let seg;
        const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
        if (Array.isArray(data)) {
          if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
          }
          if (data.length === 0) {
            return 1;
          }
          seg = data[0];
        } else {
          seg = data;
        }
        return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
      };
      exports.getEncodedBits = function getEncodedBits(version) {
        if (!VersionCheck.isValid(version) || version < 7) {
          throw new Error("Invalid QR Code version");
        }
        let d = version << 12;
        while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
          d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
        }
        return version << 12 | d;
      };
    }
  });

  // node_modules/qrcode/lib/core/format-info.js
  var require_format_info = __commonJS({
    "node_modules/qrcode/lib/core/format-info.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Utils = require_utils();
      var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
      var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
      var G15_BCH = Utils.getBCHDigit(G15);
      exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
        const data = errorCorrectionLevel.bit << 3 | mask;
        let d = data << 10;
        while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
          d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
        }
        return (data << 10 | d) ^ G15_MASK;
      };
    }
  });

  // node_modules/qrcode/lib/core/numeric-data.js
  var require_numeric_data = __commonJS({
    "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Mode = require_mode();
      function NumericData(data) {
        this.mode = Mode.NUMERIC;
        this.data = data.toString();
      }
      NumericData.getBitsLength = function getBitsLength(length) {
        return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
      };
      NumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      NumericData.prototype.getBitsLength = function getBitsLength() {
        return NumericData.getBitsLength(this.data.length);
      };
      NumericData.prototype.write = function write(bitBuffer) {
        let i, group, value;
        for (i = 0; i + 3 <= this.data.length; i += 3) {
          group = this.data.substr(i, 3);
          value = parseInt(group, 10);
          bitBuffer.put(value, 10);
        }
        const remainingNum = this.data.length - i;
        if (remainingNum > 0) {
          group = this.data.substr(i);
          value = parseInt(group, 10);
          bitBuffer.put(value, remainingNum * 3 + 1);
        }
      };
      module.exports = NumericData;
    }
  });

  // node_modules/qrcode/lib/core/alphanumeric-data.js
  var require_alphanumeric_data = __commonJS({
    "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Mode = require_mode();
      var ALPHA_NUM_CHARS = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
      ];
      function AlphanumericData(data) {
        this.mode = Mode.ALPHANUMERIC;
        this.data = data;
      }
      AlphanumericData.getBitsLength = function getBitsLength(length) {
        return 11 * Math.floor(length / 2) + 6 * (length % 2);
      };
      AlphanumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      AlphanumericData.prototype.getBitsLength = function getBitsLength() {
        return AlphanumericData.getBitsLength(this.data.length);
      };
      AlphanumericData.prototype.write = function write(bitBuffer) {
        let i;
        for (i = 0; i + 2 <= this.data.length; i += 2) {
          let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
          value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
          bitBuffer.put(value, 11);
        }
        if (this.data.length % 2) {
          bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
        }
      };
      module.exports = AlphanumericData;
    }
  });

  // node_modules/qrcode/lib/core/byte-data.js
  var require_byte_data = __commonJS({
    "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Mode = require_mode();
      function ByteData(data) {
        this.mode = Mode.BYTE;
        if (typeof data === "string") {
          this.data = new TextEncoder().encode(data);
        } else {
          this.data = new Uint8Array(data);
        }
      }
      ByteData.getBitsLength = function getBitsLength(length) {
        return length * 8;
      };
      ByteData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      ByteData.prototype.getBitsLength = function getBitsLength() {
        return ByteData.getBitsLength(this.data.length);
      };
      ByteData.prototype.write = function(bitBuffer) {
        for (let i = 0, l = this.data.length; i < l; i++) {
          bitBuffer.put(this.data[i], 8);
        }
      };
      module.exports = ByteData;
    }
  });

  // node_modules/qrcode/lib/core/kanji-data.js
  var require_kanji_data = __commonJS({
    "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Mode = require_mode();
      var Utils = require_utils();
      function KanjiData(data) {
        this.mode = Mode.KANJI;
        this.data = data;
      }
      KanjiData.getBitsLength = function getBitsLength(length) {
        return length * 13;
      };
      KanjiData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      KanjiData.prototype.getBitsLength = function getBitsLength() {
        return KanjiData.getBitsLength(this.data.length);
      };
      KanjiData.prototype.write = function(bitBuffer) {
        let i;
        for (i = 0; i < this.data.length; i++) {
          let value = Utils.toSJIS(this.data[i]);
          if (value >= 33088 && value <= 40956) {
            value -= 33088;
          } else if (value >= 57408 && value <= 60351) {
            value -= 49472;
          } else {
            throw new Error(
              "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
            );
          }
          value = (value >>> 8 & 255) * 192 + (value & 255);
          bitBuffer.put(value, 13);
        }
      };
      module.exports = KanjiData;
    }
  });

  // node_modules/dijkstrajs/dijkstra.js
  var require_dijkstra = __commonJS({
    "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
      "use strict";
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var dijkstra = {
        single_source_shortest_paths: function(graph, s, d) {
          var predecessors = {};
          var costs = {};
          costs[s] = 0;
          var open = dijkstra.PriorityQueue.make();
          open.push(s, 0);
          var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
          while (!open.empty()) {
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            adjacent_nodes = graph[u] || {};
            for (v in adjacent_nodes) {
              if (adjacent_nodes.hasOwnProperty(v)) {
                cost_of_e = adjacent_nodes[v];
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === "undefined";
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                  costs[v] = cost_of_s_to_u_plus_cost_of_e;
                  open.push(v, cost_of_s_to_u_plus_cost_of_e);
                  predecessors[v] = u;
                }
              }
            }
          }
          if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
            var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
            throw new Error(msg);
          }
          return predecessors;
        },
        extract_shortest_path_from_predecessor_list: function(predecessors, d) {
          var nodes = [];
          var u = d;
          var predecessor;
          while (u) {
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
          }
          nodes.reverse();
          return nodes;
        },
        find_path: function(graph, s, d) {
          var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
          return dijkstra.extract_shortest_path_from_predecessor_list(
            predecessors,
            d
          );
        },
        /**
         * A very naive priority queue implementation.
         */
        PriorityQueue: {
          make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for (key in T) {
              if (T.hasOwnProperty(key)) {
                t[key] = T[key];
              }
            }
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
          },
          default_sorter: function(a, b) {
            return a.cost - b.cost;
          },
          /**
           * Add a new item to the queue and ensure the highest priority element
           * is at the front of the queue.
           */
          push: function(value, cost) {
            var item = { value, cost };
            this.queue.push(item);
            this.queue.sort(this.sorter);
          },
          /**
           * Return the highest priority element in the queue.
           */
          pop: function() {
            return this.queue.shift();
          },
          empty: function() {
            return this.queue.length === 0;
          }
        }
      };
      if (typeof module !== "undefined") {
        module.exports = dijkstra;
      }
    }
  });

  // node_modules/qrcode/lib/core/segments.js
  var require_segments = __commonJS({
    "node_modules/qrcode/lib/core/segments.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Mode = require_mode();
      var NumericData = require_numeric_data();
      var AlphanumericData = require_alphanumeric_data();
      var ByteData = require_byte_data();
      var KanjiData = require_kanji_data();
      var Regex = require_regex();
      var Utils = require_utils();
      var dijkstra = require_dijkstra();
      function getStringByteLength(str) {
        return unescape(encodeURIComponent(str)).length;
      }
      function getSegments(regex, mode, str) {
        const segments = [];
        let result;
        while ((result = regex.exec(str)) !== null) {
          segments.push({
            data: result[0],
            index: result.index,
            mode,
            length: result[0].length
          });
        }
        return segments;
      }
      function getSegmentsFromString(dataStr) {
        const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
        const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
        let byteSegs;
        let kanjiSegs;
        if (Utils.isKanjiModeEnabled()) {
          byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
          kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
        } else {
          byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
          kanjiSegs = [];
        }
        const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
        return segs.sort(function(s1, s2) {
          return s1.index - s2.index;
        }).map(function(obj) {
          return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
          };
        });
      }
      function getSegmentBitsLength(length, mode) {
        switch (mode) {
          case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
          case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
          case Mode.KANJI:
            return KanjiData.getBitsLength(length);
          case Mode.BYTE:
            return ByteData.getBitsLength(length);
        }
      }
      function mergeSegments(segs) {
        return segs.reduce(function(acc, curr) {
          const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
          if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
          }
          acc.push(curr);
          return acc;
        }, []);
      }
      function buildNodes(segs) {
        const nodes = [];
        for (let i = 0; i < segs.length; i++) {
          const seg = segs[i];
          switch (seg.mode) {
            case Mode.NUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.ALPHANUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.KANJI:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
              break;
            case Mode.BYTE:
              nodes.push([
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
          }
        }
        return nodes;
      }
      function buildGraph(nodes, version) {
        const table = {};
        const graph = { start: {} };
        let prevNodeIds = ["start"];
        for (let i = 0; i < nodes.length; i++) {
          const nodeGroup = nodes[i];
          const currentNodeIds = [];
          for (let j = 0; j < nodeGroup.length; j++) {
            const node = nodeGroup[j];
            const key = "" + i + j;
            currentNodeIds.push(key);
            table[key] = { node, lastCount: 0 };
            graph[key] = {};
            for (let n = 0; n < prevNodeIds.length; n++) {
              const prevNodeId = prevNodeIds[n];
              if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                table[prevNodeId].lastCount += node.length;
              } else {
                if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
              }
            }
          }
          prevNodeIds = currentNodeIds;
        }
        for (let n = 0; n < prevNodeIds.length; n++) {
          graph[prevNodeIds[n]].end = 0;
        }
        return { map: graph, table };
      }
      function buildSingleSegment(data, modesHint) {
        let mode;
        const bestMode = Mode.getBestModeForData(data);
        mode = Mode.from(modesHint, bestMode);
        if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
          throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
        }
        if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
          mode = Mode.BYTE;
        }
        switch (mode) {
          case Mode.NUMERIC:
            return new NumericData(data);
          case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
          case Mode.KANJI:
            return new KanjiData(data);
          case Mode.BYTE:
            return new ByteData(data);
        }
      }
      exports.fromArray = function fromArray(array) {
        return array.reduce(function(acc, seg) {
          if (typeof seg === "string") {
            acc.push(buildSingleSegment(seg, null));
          } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
          }
          return acc;
        }, []);
      };
      exports.fromString = function fromString(data, version) {
        const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
        const nodes = buildNodes(segs);
        const graph = buildGraph(nodes, version);
        const path = dijkstra.find_path(graph.map, "start", "end");
        const optimizedSegs = [];
        for (let i = 1; i < path.length - 1; i++) {
          optimizedSegs.push(graph.table[path[i]].node);
        }
        return exports.fromArray(mergeSegments(optimizedSegs));
      };
      exports.rawSplit = function rawSplit(data) {
        return exports.fromArray(
          getSegmentsFromString(data, Utils.isKanjiModeEnabled())
        );
      };
    }
  });

  // node_modules/qrcode/lib/core/qrcode.js
  var require_qrcode = __commonJS({
    "node_modules/qrcode/lib/core/qrcode.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Utils = require_utils();
      var ECLevel = require_error_correction_level();
      var BitBuffer = require_bit_buffer();
      var BitMatrix = require_bit_matrix();
      var AlignmentPattern = require_alignment_pattern();
      var FinderPattern = require_finder_pattern();
      var MaskPattern = require_mask_pattern();
      var ECCode = require_error_correction_code();
      var ReedSolomonEncoder = require_reed_solomon_encoder();
      var Version = require_version();
      var FormatInfo = require_format_info();
      var Mode = require_mode();
      var Segments = require_segments();
      function setupFinderPattern(matrix, version) {
        const size = matrix.size;
        const pos = FinderPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -1; r <= 7; r++) {
            if (row + r <= -1 || size <= row + r) continue;
            for (let c = -1; c <= 7; c++) {
              if (col + c <= -1 || size <= col + c) continue;
              if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupTimingPattern(matrix) {
        const size = matrix.size;
        for (let r = 8; r < size - 8; r++) {
          const value = r % 2 === 0;
          matrix.set(r, 6, value, true);
          matrix.set(6, r, value, true);
        }
      }
      function setupAlignmentPattern(matrix, version) {
        const pos = AlignmentPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -2; r <= 2; r++) {
            for (let c = -2; c <= 2; c++) {
              if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      function setupVersionInfo(matrix, version) {
        const size = matrix.size;
        const bits = Version.getEncodedBits(version);
        let row, col, mod;
        for (let i = 0; i < 18; i++) {
          row = Math.floor(i / 3);
          col = i % 3 + size - 8 - 3;
          mod = (bits >> i & 1) === 1;
          matrix.set(row, col, mod, true);
          matrix.set(col, row, mod, true);
        }
      }
      function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
        const size = matrix.size;
        const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
        let i, mod;
        for (i = 0; i < 15; i++) {
          mod = (bits >> i & 1) === 1;
          if (i < 6) {
            matrix.set(i, 8, mod, true);
          } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
          } else {
            matrix.set(size - 15 + i, 8, mod, true);
          }
          if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
          } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
          } else {
            matrix.set(8, 15 - i - 1, mod, true);
          }
        }
        matrix.set(size - 8, 8, 1, true);
      }
      function setupData(matrix, data) {
        const size = matrix.size;
        let inc = -1;
        let row = size - 1;
        let bitIndex = 7;
        let byteIndex = 0;
        for (let col = size - 1; col > 0; col -= 2) {
          if (col === 6) col--;
          while (true) {
            for (let c = 0; c < 2; c++) {
              if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) {
                  dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                }
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                  byteIndex++;
                  bitIndex = 7;
                }
              }
            }
            row += inc;
            if (row < 0 || size <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
      function createData(version, errorCorrectionLevel, segments) {
        const buffer = new BitBuffer();
        segments.forEach(function(data) {
          buffer.put(data.mode.bit, 4);
          buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
          data.write(buffer);
        });
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
          buffer.put(0, 4);
        }
        while (buffer.getLengthInBits() % 8 !== 0) {
          buffer.putBit(0);
        }
        const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
        for (let i = 0; i < remainingByte; i++) {
          buffer.put(i % 2 ? 17 : 236, 8);
        }
        return createCodewords(buffer, version, errorCorrectionLevel);
      }
      function createCodewords(bitBuffer, version, errorCorrectionLevel) {
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewords = totalCodewords - ecTotalCodewords;
        const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
        const blocksInGroup2 = totalCodewords % ecTotalBlocks;
        const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
        const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
        const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
        const rs = new ReedSolomonEncoder(ecCount);
        let offset = 0;
        const dcData = new Array(ecTotalBlocks);
        const ecData = new Array(ecTotalBlocks);
        let maxDataSize = 0;
        const buffer = new Uint8Array(bitBuffer.buffer);
        for (let b = 0; b < ecTotalBlocks; b++) {
          const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
          dcData[b] = buffer.slice(offset, offset + dataSize);
          ecData[b] = rs.encode(dcData[b]);
          offset += dataSize;
          maxDataSize = Math.max(maxDataSize, dataSize);
        }
        const data = new Uint8Array(totalCodewords);
        let index = 0;
        let i, r;
        for (i = 0; i < maxDataSize; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            if (i < dcData[r].length) {
              data[index++] = dcData[r][i];
            }
          }
        }
        for (i = 0; i < ecCount; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            data[index++] = ecData[r][i];
          }
        }
        return data;
      }
      function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
        let segments;
        if (Array.isArray(data)) {
          segments = Segments.fromArray(data);
        } else if (typeof data === "string") {
          let estimatedVersion = version;
          if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
          }
          segments = Segments.fromString(data, estimatedVersion || 40);
        } else {
          throw new Error("Invalid data");
        }
        const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
        if (!bestVersion) {
          throw new Error("The amount of data is too big to be stored in a QR Code");
        }
        if (!version) {
          version = bestVersion;
        } else if (version < bestVersion) {
          throw new Error(
            "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
          );
        }
        const dataBits = createData(version, errorCorrectionLevel, segments);
        const moduleCount = Utils.getSymbolSize(version);
        const modules = new BitMatrix(moduleCount);
        setupFinderPattern(modules, version);
        setupTimingPattern(modules);
        setupAlignmentPattern(modules, version);
        setupFormatInfo(modules, errorCorrectionLevel, 0);
        if (version >= 7) {
          setupVersionInfo(modules, version);
        }
        setupData(modules, dataBits);
        if (isNaN(maskPattern)) {
          maskPattern = MaskPattern.getBestMask(
            modules,
            setupFormatInfo.bind(null, modules, errorCorrectionLevel)
          );
        }
        MaskPattern.applyMask(maskPattern, modules);
        setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
        return {
          modules,
          version,
          errorCorrectionLevel,
          maskPattern,
          segments
        };
      }
      exports.create = function create(data, options) {
        if (typeof data === "undefined" || data === "") {
          throw new Error("No input text");
        }
        let errorCorrectionLevel = ECLevel.M;
        let version;
        let mask;
        if (typeof options !== "undefined") {
          errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
          version = Version.from(options.version);
          mask = MaskPattern.from(options.maskPattern);
          if (options.toSJISFunc) {
            Utils.setToSJISFunction(options.toSJISFunc);
          }
        }
        return createSymbol(data, version, errorCorrectionLevel, mask);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/utils.js
  var require_utils2 = __commonJS({
    "node_modules/qrcode/lib/renderer/utils.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      function hex2rgba(hex) {
        if (typeof hex === "number") {
          hex = hex.toString();
        }
        if (typeof hex !== "string") {
          throw new Error("Color should be defined as hex string");
        }
        let hexCode = hex.slice().replace("#", "").split("");
        if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
          throw new Error("Invalid hex color: " + hex);
        }
        if (hexCode.length === 3 || hexCode.length === 4) {
          hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
            return [c, c];
          }));
        }
        if (hexCode.length === 6) hexCode.push("F", "F");
        const hexValue = parseInt(hexCode.join(""), 16);
        return {
          r: hexValue >> 24 & 255,
          g: hexValue >> 16 & 255,
          b: hexValue >> 8 & 255,
          a: hexValue & 255,
          hex: "#" + hexCode.slice(0, 6).join("")
        };
      }
      exports.getOptions = function getOptions(options) {
        if (!options) options = {};
        if (!options.color) options.color = {};
        const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
        const width = options.width && options.width >= 21 ? options.width : void 0;
        const scale = options.scale || 4;
        return {
          width,
          scale: width ? 4 : scale,
          margin,
          color: {
            dark: hex2rgba(options.color.dark || "#000000ff"),
            light: hex2rgba(options.color.light || "#ffffffff")
          },
          type: options.type,
          rendererOpts: options.rendererOpts || {}
        };
      };
      exports.getScale = function getScale(qrSize, opts) {
        return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
      };
      exports.getImageWidth = function getImageWidth(qrSize, opts) {
        const scale = exports.getScale(qrSize, opts);
        return Math.floor((qrSize + opts.margin * 2) * scale);
      };
      exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
        const size = qr.modules.size;
        const data = qr.modules.data;
        const scale = exports.getScale(size, opts);
        const symbolSize = Math.floor((size + opts.margin * 2) * scale);
        const scaledMargin = opts.margin * scale;
        const palette = [opts.color.light, opts.color.dark];
        for (let i = 0; i < symbolSize; i++) {
          for (let j = 0; j < symbolSize; j++) {
            let posDst = (i * symbolSize + j) * 4;
            let pxColor = opts.color.light;
            if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
              const iSrc = Math.floor((i - scaledMargin) / scale);
              const jSrc = Math.floor((j - scaledMargin) / scale);
              pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }
            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
          }
        }
      };
    }
  });

  // node_modules/qrcode/lib/renderer/canvas.js
  var require_canvas = __commonJS({
    "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Utils = require_utils2();
      function clearCanvas(ctx, canvas, size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!canvas.style) canvas.style = {};
        canvas.height = size;
        canvas.width = size;
        canvas.style.height = size + "px";
        canvas.style.width = size + "px";
      }
      function getCanvasElement() {
        try {
          return document.createElement("canvas");
        } catch (e) {
          throw new Error("You need to specify a canvas element");
        }
      }
      exports.render = function render(qrData, canvas, options) {
        let opts = options;
        let canvasEl = canvas;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!canvas) {
          canvasEl = getCanvasElement();
        }
        opts = Utils.getOptions(opts);
        const size = Utils.getImageWidth(qrData.modules.size, opts);
        const ctx = canvasEl.getContext("2d");
        const image = ctx.createImageData(size, size);
        Utils.qrToImageData(image.data, qrData, opts);
        clearCanvas(ctx, canvasEl, size);
        ctx.putImageData(image, 0, 0);
        return canvasEl;
      };
      exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
        let opts = options;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!opts) opts = {};
        const canvasEl = exports.render(qrData, canvas, opts);
        const type = opts.type || "image/png";
        const rendererOpts = opts.rendererOpts || {};
        return canvasEl.toDataURL(type, rendererOpts.quality);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/svg-tag.js
  var require_svg_tag = __commonJS({
    "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var Utils = require_utils2();
      function getColorAttrib(color, attrib) {
        const alpha = color.a / 255;
        const str = attrib + '="' + color.hex + '"';
        return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
      }
      function svgCmd(cmd, x, y) {
        let str = cmd + x;
        if (typeof y !== "undefined") str += " " + y;
        return str;
      }
      function qrToPath(data, size, margin) {
        let path = "";
        let moveBy = 0;
        let newRow = false;
        let lineLength = 0;
        for (let i = 0; i < data.length; i++) {
          const col = Math.floor(i % size);
          const row = Math.floor(i / size);
          if (!col && !newRow) newRow = true;
          if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
              path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
              moveBy = 0;
              newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
              path += svgCmd("h", lineLength);
              lineLength = 0;
            }
          } else {
            moveBy++;
          }
        }
        return path;
      }
      exports.render = function render(qrData, options, cb) {
        const opts = Utils.getOptions(options);
        const size = qrData.modules.size;
        const data = qrData.modules.data;
        const qrcodesize = size + opts.margin * 2;
        const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
        const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
        const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
        const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
        const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
        if (typeof cb === "function") {
          cb(null, svgTag);
        }
        return svgTag;
      };
    }
  });

  // node_modules/qrcode/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/qrcode/lib/browser.js"(exports) {
      init_define_KEEP_PRECACHE();
      init_define_KEEP_PUBKEY();
      var canPromise = require_can_promise();
      var QRCode2 = require_qrcode();
      var CanvasRenderer = require_canvas();
      var SvgRenderer = require_svg_tag();
      function renderCanvas(renderFunc, canvas, text, opts, cb) {
        const args = [].slice.call(arguments, 1);
        const argsNum = args.length;
        const isLastArgCb = typeof args[argsNum - 1] === "function";
        if (!isLastArgCb && !canPromise()) {
          throw new Error("Callback required as last argument");
        }
        if (isLastArgCb) {
          if (argsNum < 2) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === "undefined") {
              cb = opts;
              opts = void 0;
            } else {
              cb = opts;
              opts = text;
              text = canvas;
              canvas = void 0;
            }
          }
        } else {
          if (argsNum < 1) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 1) {
            text = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = void 0;
          }
          return new Promise(function(resolve, reject) {
            try {
              const data = QRCode2.create(text, opts);
              resolve(renderFunc(data, canvas, opts));
            } catch (e) {
              reject(e);
            }
          });
        }
        try {
          const data = QRCode2.create(text, opts);
          cb(null, renderFunc(data, canvas, opts));
        } catch (e) {
          cb(e);
        }
      }
      exports.create = QRCode2.create;
      exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
      exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
      exports.toString = renderCanvas.bind(null, function(data, _, opts) {
        return SvgRenderer.render(data, opts);
      });
    }
  });

  // keep/sw-entry.js
  init_define_KEEP_PRECACHE();
  init_define_KEEP_PUBKEY();

  // api/ledger.js
  init_define_KEEP_PRECACHE();
  init_define_KEEP_PUBKEY();
  var import_qrcode = __toESM(require_browser(), 1);

  // keep/store-idb.js
  init_define_KEEP_PRECACHE();
  init_define_KEEP_PUBKEY();
  var DB = "igp-keep";
  var ST = "kv";
  var \uBA54\uBAA8\uB9AC = null;
  var \uC5EC\uB294\uC911 = null;
  function idb() {
    return new Promise((ok, no) => {
      const q = indexedDB.open(DB, 1);
      q.onupgradeneeded = () => q.result.createObjectStore(ST);
      q.onsuccess = () => ok(q.result);
      q.onerror = () => no(q.error);
    });
  }
  async function \uC900\uBE44() {
    if (\uBA54\uBAA8\uB9AC) return \uBA54\uBAA8\uB9AC;
    if (!\uC5EC\uB294\uC911) \uC5EC\uB294\uC911 = (async () => {
      const db = await idb();
      const m = /* @__PURE__ */ new Map();
      await new Promise((ok, no) => {
        const tx = db.transaction(ST, "readonly");
        const c = tx.objectStore(ST).openCursor();
        c.onsuccess = () => {
          const cur = c.result;
          if (cur) {
            m.set(cur.key, cur.value);
            cur.continue();
          } else ok();
        };
        c.onerror = () => no(c.error);
      });
      db.close();
      \uBA54\uBAA8\uB9AC = m;
      return m;
    })();
    return \uC5EC\uB294\uC911;
  }
  async function \uC801\uAE30(pairs, \uC9C0\uC6B8 = []) {
    const db = await idb();
    await new Promise((ok, no) => {
      const tx = db.transaction(ST, "readwrite");
      const s = tx.objectStore(ST);
      pairs.forEach(([k, v]) => s.put(v, k));
      \uC9C0\uC6B8.forEach((k) => s.delete(k));
      tx.oncomplete = ok;
      tx.onerror = () => no(tx.error);
    });
    db.close();
  }
  var \uBCF5\uC0AC = (v) => v === void 0 || v === null ? null : JSON.parse(JSON.stringify(v));
  var REDIS_ON = false;
  function assertStore() {
  }
  async function get(key) {
    return \uBCF5\uC0AC((await \uC900\uBE44()).get(key));
  }
  async function mget(keys2) {
    const m = await \uC900\uBE44();
    return keys2.map((k) => \uBCF5\uC0AC(m.get(k)));
  }
  async function set(key, val) {
    const m = await \uC900\uBE44();
    const v = \uBCF5\uC0AC(val);
    m.set(key, v);
    await \uC801\uAE30([[key, v]]);
  }
  async function mset(pairs) {
    const m = await \uC900\uBE44();
    const p = pairs.map(([k, v]) => [k, \uBCF5\uC0AC(v)]);
    p.forEach(([k, v]) => m.set(k, v));
    await \uC801\uAE30(p);
  }
  async function incr(key) {
    const m = await \uC900\uBE44();
    const n = (Number(m.get(key)) || 0) + 1;
    m.set(key, n);
    await \uC801\uAE30([[key, n]]);
    return n;
  }
  async function del(key) {
    const m = await \uC900\uBE44();
    m.delete(key);
    await \uC801\uAE30([], [key]);
  }

  // api/_book.js
  init_define_KEEP_PRECACHE();
  init_define_KEEP_PUBKEY();
  var esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  var won = (n) => Number(n || 0).toLocaleString("ko-KR");
  var \uB2EC\uC774\uB984 = (m) => Number(m.slice(0, 4)) + "\uB144 " + Number(m.slice(5, 7)) + "\uC6D4";
  var \uB0A0\uC9DC = (d) => Number(d.slice(5, 7)) + "/" + Number(d.slice(8, 10));
  var WK = ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"];
  var \uB3C4\uC7A5 = (c) => `<svg viewBox="0 0 24 24" fill="${c}" aria-hidden="true">
  <path d="M12 21s-7.5-4.7-9.4-9.1C1.2 8.6 3 5.2 6.3 4.6c2-.4 3.9.5 4.9 2 1-1.5 2.9-2.4 4.9-2 3.3.6 5.1 4 3.7 7.3C19.5 16.3 12 21 12 21z"/>
</svg>`;
  function \uB3C4\uC7A5\uD310(m, tx, cfg) {
    const skip = new Set((cfg.skipCats || []).map(String));
    const \uC4F4\uB0A0 = /* @__PURE__ */ new Set();
    (tx || []).forEach((t) => {
      if (t.k !== "out") return;
      if (cfg.skipFixed !== false && t.fx) return;
      if (skip.has(t.cat || "")) return;
      \uC4F4\uB0A0.add(t.d);
    });
    const [y, mo] = m.split("-").map(Number);
    const \uB9C8\uC9C0\uB9C9 = new Date(Date.UTC(y, mo, 0)).getUTCDate();
    const \uCCAB\uC694\uC77C = new Date(Date.UTC(y, mo - 1, 1)).getUTCDay();
    const \uC801\uC740\uB0A0 = new Set((tx || []).map((t) => t.d));
    let html = "";
    for (let i = 0; i < \uCCAB\uC694\uC77C; i++) html += '<i class="pad"></i>';
    let \uAC1C\uC218 = 0;
    for (let d = 1; d <= \uB9C8\uC9C0\uB9C9; d++) {
      const iso = m + "-" + String(d).padStart(2, "0");
      if (\uC801\uC740\uB0A0.size && !\uC4F4\uB0A0.has(iso)) {
        \uAC1C\uC218++;
        const rot = d * 37 % 9 - 4;
        const ink = (0.72 + d * 53 % 28 / 100).toFixed(2);
        html += `<i class="on" style="--rot:${rot}deg;opacity:${ink}">${\uB3C4\uC7A5("#E8328A")}</i>`;
      } else {
        html += `<i class="off">${d}</i>`;
      }
    }
    return { html, \uAC1C\uC218 };
  }
  function buildBook(data) {
    const { kv, \uB2EC: months = [], \uBC1B\uC740\uB0A0 } = data;
    const g = (k) => kv[k];
    const ws = Object.keys(kv)[0] ? (/^lb:([^:]+):/.exec(Object.keys(kv)[0]) || [])[1] : "me";
    const cfg = g(`lb:${ws}:cfg`) || {};
    const fixed = g(`lb:${ws}:fixed`) || [];
    const bills = g(`lb:${ws}:bills`) || {};
    const nsBest = g(`lb:${ws}:nsBest`) || {};
    const nsRun = g(`lb:${ws}:nsRun`) || {};
    let \uCD1D\uC218\uC785 = 0, \uCD1D\uC9C0\uCD9C = 0, \uCD1D\uAC74\uC218 = 0, \uCD1D\uB3C4\uC7A5 = 0;
    const \uB2EC\uC790\uB8CC = months.slice().sort().map((m) => {
      const tx = (g(`lb:${ws}:tx:${m}`) || []).slice().sort((a, b) => a.d === b.d ? (b.ts || 0) - (a.ts || 0) : a.d < b.d ? 1 : -1);
      const sum = g(`lb:${ws}:sum:${m}`) || { in: 0, out: 0 };
      const \uD3102 = \uB3C4\uC7A5\uD310(m, tx, cfg);
      \uCD1D\uC218\uC785 += sum.in || 0;
      \uCD1D\uC9C0\uCD9C += sum.out || 0;
      \uCD1D\uAC74\uC218 += tx.length;
      \uCD1D\uB3C4\uC7A5 += \uD3102.\uAC1C\uC218;
      return { m, tx, sum, \uD310: \uD3102 };
    });
    const \uB2EC\uC7A5 = \uB2EC\uC790\uB8CC.map(({ m, tx, sum, \uD310: \uD3102 }) => `
    <section class="month">
      <div class="mhead">
        <h3>${\uB2EC\uC774\uB984(m)}</h3>
        <div class="mnum">${tx.length}\uAC74</div>
      </div>
      <div class="msum">
        <div><s>\uB4E4\uC5B4\uC628 \uB3C8</s><b class="in">${won(sum.in)}\uC6D0</b></div>
        <div><s>\uB098\uAC04 \uB3C8</s><b class="out">${won(sum.out)}\uC6D0</b></div>
        <div><s>\uB0A8\uC740 \uAC83</s><b>${won((sum.in || 0) - (sum.out || 0))}\uC6D0</b></div>
        <div><s>\uB3C4\uC7A5</s><b>${\uD3102.\uAC1C\uC218}\uAC1C</b></div>
      </div>

      <div class="stamps">
        <div class="wkhead">${WK.map((w) => `<span>${w}</span>`).join("")}</div>
        <div class="board">${\uD3102.html}</div>
      </div>

      ${tx.length ? `
      <div class="txwrap"><table class="tx">
        <thead><tr>
          <th class="d">\uB0A0\uC9DC</th><th>\uB0B4\uC6A9</th><th class="c">\uBD84\uB958</th>
          <th class="c">\uB0B8 \uBC29\uBC95</th><th class="n">\uB4E4\uC5B4\uC634</th><th class="n">\uB098\uAC10</th>
        </tr></thead>
        <tbody>${tx.map((t) => `
          <tr${t.fx ? ' class="fx"' : ""}>
            <td class="d">${\uB0A0\uC9DC(t.d)}</td>
            <td>${esc(t.memo || "")}${t.fx ? "<em>\uB9E4\uB2EC \uB098\uAC00\uB294 \uAC83</em>" : ""}</td>
            <td class="c">${esc(t.cat || "")}</td>
            <td class="c">${esc(t.pay || "")}</td>
            <td class="n in">${t.k === "in" ? won(t.amt) : ""}</td>
            <td class="n out">${t.k === "out" ? won(t.amt) : ""}</td>
          </tr>`).join("")}</tbody>
      </table></div>` : '<p class="none">\uC774 \uB2EC\uC740 \uC801\uC740 \uAC83\uC774 \uC5C6\uC5B4\uC694.</p>'}
    </section>`).join("");
    const \uC8FC\uAE30 = (f) => f.every === "w" ? `\uB9E4\uC8FC ${WK[Number(f.wd) || 0]}\uC694\uC77C` : f.every === "y" ? `\uB9E4\uB144 ${Number(f.mon) || 1}\uC6D4 ${f.day}\uC77C` : f.every === "n" ? `${Number(f.n) || 2}\uAC1C\uC6D4\uB9C8\uB2E4 ${f.day}\uC77C` : `\uB9E4\uB2EC ${f.day}\uC77C`;
    const \uACE0\uC815\uC7A5 = fixed.length ? `
    <div class="txwrap"><table class="tx">
      <thead><tr><th>\uC774\uB984</th><th class="c">\uC5B8\uC81C</th><th class="c">\uBD84\uB958</th><th class="n">\uAE08\uC561</th></tr></thead>
      <tbody>${fixed.slice().sort((a, b) => a.day - b.day).map((f) => `
        <tr${f.off ? ' class="off"' : ""}>
          <td>${esc(f.name)}${f.memo ? `<em>${esc(f.memo)}</em>` : ""}${f.off ? "<em>\uC9C0\uAE08\uC740 \uAEBC\uB460</em>" : ""}</td>
          <td class="c">${\uC8FC\uAE30(f)}</td>
          <td class="c">${esc(f.cat || "")}</td>
          <td class="n ${f.kind === "in" ? "in" : "out"}">${won(f.amt)}</td>
        </tr>`).join("")}</tbody>
    </table></div>` : '<p class="none">\uB4F1\uB85D\uD574 \uB450\uC2E0 \uAC83\uC774 \uC5C6\uC5B4\uC694.</p>';
    const \uCE74\uB4DC\uBAA9\uB85D = cfg.cards || [];
    const \uCCAD\uAD6C = Object.entries(bills).sort((a, b) => a[0].localeCompare(b[0]));
    const \uCE74\uB4DC\uC7A5 = \uCE74\uB4DC\uBAA9\uB85D.length ? `
    <div class="txwrap"><table class="tx">
      <thead><tr><th>\uCE74\uB4DC</th><th class="c">\uB9C8\uAC10\uC77C</th><th class="c">\uACB0\uC81C\uC77C</th><th class="c">\uB0B4\uC5ED\uC5D0 \uC801\uB294 \uC774\uB984</th></tr></thead>
      <tbody>${\uCE74\uB4DC\uBAA9\uB85D.map((c) => `<tr>
        <td>${esc(c.name)}</td><td class="c">${c.close}\uC77C</td>
        <td class="c">${c.payday}\uC77C</td><td class="c">${esc(c.pay || c.name)}</td>
      </tr>`).join("")}</tbody>
    </table></div>
    ${\uCCAD\uAD6C.length ? `
    <h4>\uCE74\uB4DC\uC0AC\uAC00 \uC54C\uB824\uC900 \uCCAD\uAD6C\uC561</h4>
    <div class="txwrap"><table class="tx">
      <thead><tr><th>\uCE74\uB4DC</th><th class="c">\uBE60\uC9C0\uB294 \uB0A0</th><th class="n">\uAE08\uC561</th></tr></thead>
      <tbody>${\uCCAD\uAD6C.map(([k, v]) => {
      const [nm, d] = k.split("|");
      return `<tr><td>${esc(nm)}</td><td class="c">${d ? \uB0A0\uC9DC(d) : ""}</td><td class="n out">${won(v)}\uC6D0</td></tr>`;
    }).join("")}</tbody>
    </table></div>` : ""}` : '<p class="none">\uB4F1\uB85D\uD574 \uB450\uC2E0 \uCE74\uB4DC\uAC00 \uC5C6\uC5B4\uC694.</p>';
    const \uAE30\uAC04 = months.length ? `${\uB2EC\uC774\uB984(months[0])} ~ ${\uB2EC\uC774\uB984(months[months.length - 1])}` : "\uC801\uC740 \uB2EC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4";
    return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>\uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8 \uC7A5\uBD80 \uBCF4\uAD00\uBCF8 \xB7 ${esc(\uBC1B\uC740\uB0A0 || "")}</title>
<style>
/* \u26D4 \uBC14\uAE65\uC5D0\uC11C \uC544\uBB34\uAC83\uB3C4 \uC548 \uBD88\uB7EC\uC628\uB2E4. \uAE00\uAF34\uC740 \uAE30\uAE30\uC5D0 \uC788\uB294 \uAC83\uB9CC \uC4F4\uB2E4.
      \uC6F9\uD3F0\uD2B8\uB97C \uB9C1\uD06C\uD558\uBA74 \uADF8 \uC8FC\uC18C\uAC00 \uC8FD\uB294 \uB0A0 \uC774 \uBB38\uC11C\uC758 \uC5BC\uAD74\uC774 \uBC14\uB010\uB2E4. */
:root{
  --bg:#E0FD7B; --paper:#FFFFFF; --ink:#12140C; --sub:#5E6B3B; --faint:#8B9760;
  --line:#EBEBE3; --line2:#DCDCD2; --acc:#C2F56D; --pop:#E8328A;
  --in:#17795A; --out:#DD3A6E;
  --ff:'Pretendard','Apple SD Gothic Neo','Malgun Gothic','\uB9D1\uC740 \uACE0\uB515',system-ui,sans-serif;
}
/* \u26D4 **min-width:0 \uC774 \uD575\uC2EC\uC774\uB2E4** (2026-08-17 3\uCC28 \xB7 \uC0AC\uC7A5\uB2D8 \uD3F0\uC5D0\uC11C \uACC4\uC18D \uC67C\uCABD\uC73C\uB85C \uC3E0\uB838\uB2E4).
      \uACA9\uC790\xB7\uD50C\uB809\uC2A4 \uCE78\uC740 \uAE30\uBCF8\uAC12\uC774 min-width:auto \uB77C **\uC548 \uB04A\uAE30\uB294 \uAE00(white-space:nowrap)\uBCF4\uB2E4
      \uC881\uC544\uC9C0\uC9C0 \uBABB\uD55C\uB2E4.** \uAE00\uAF34\uC774 \uC870\uAE08\uB9CC \uB113\uC740 \uAE30\uAE30(\uC544\uC774\uD3F0)\uC5D0\uC11C\uB294 \uADF8 \uCE78\uC774 \uD654\uBA74\uC744 \uBC00\uC5B4\uB0B4\uACE0,
      \uADF8\uB7EC\uBA74 \uC885\uC774\uAC00 \uD654\uBA74\uBCF4\uB2E4 \uB113\uC5B4\uC838 \uAC00\uC6B4\uB370 \uC815\uB82C(margin:0 auto)\uC774 **\uAC00\uC6B4\uB370\uB85C \uC548 \uC628\uB2E4** \u2014
      \uAE00\uC740 \uC67C\uCABD\uC5D0 \uBD99\uACE0 \uC624\uB978\uCABD\uC5D0 \uBC14\uD0D5\uC0C9\uB9CC \uB0A8\uB294\uB2E4. \uADF8\uAC8C \uC0AC\uC7A5\uB2D8\uC774 \uBCF4\uC2E0 \uADF8\uB9BC\uC774\uB2E4. */
*{margin:0;padding:0;box-sizing:border-box;min-width:0;}
/* \u26D4 \uB9C8\uC9C0\uB9C9 \uBE57\uC7A5 : \uC885\uC774\uB294 **\uD654\uBA74\uBCF4\uB2E4 \uB113\uC5B4\uC9C8 \uC218 \uC5C6\uB2E4.**
      \uD45C\uB294 \uC774\uBBF8 \uC81C \uC0C1\uC790(.txwrap) \uC548\uC5D0\uC11C \uBC00\uB9AC\uBBC0\uB85C \uC774\uAC78 \uAC78\uC5B4\uB3C4 **\uC798\uB9AC\uB294 \uAE00\uC774 \uC5C6\uB2E4.**
      (2026-08-17 1\uCC28\uC5D0\uB294 \uD45C\uAC00 \uBC16\uC5D0 \uC788\uC5B4\uC11C \uC774\uAC78 \uBABB \uAC78\uC5C8\uB2E4) */
html{max-width:100%;overflow-x:hidden;}
body{background:var(--bg);color:var(--ink);font-family:var(--ff);
  font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased;padding:28px 16px 70px;
  max-width:100%;overflow-x:hidden;}
.num{font-variant-numeric:tabular-nums;}
.wrap{max-width:860px;margin:0 auto;width:100%;}

/* \u2500\u2500 \uD45C\uC9C0 \u2014 \uACC4\uC57D\uC11C\uCC98\uB7FC \uBC1B\uB294 \uBB38\uC11C\uB2E4. \uCCAB \uC7A5\uC5D0\uC11C \uBB34\uC5C7\uC778\uC9C0 \uB2E4 \uB9D0\uD55C\uB2E4 \u2500\u2500 */
.cover{background:var(--paper);border:1px solid var(--line2);border-radius:26px;
  padding:52px 40px 40px;text-align:center;box-shadow:0 2px 4px rgba(20,24,10,.05),0 12px 34px rgba(20,24,10,.08);}
.cover .stamps3{display:flex;justify-content:center;gap:16px;margin-bottom:26px;}
.cover .stamps3 i{display:block;width:46px;height:46px;}
.cover .stamps3 i:nth-child(1){transform:rotate(-11deg);opacity:.9;}
.cover .stamps3 i:nth-child(2){transform:rotate(4deg) translateY(-5px);}
.cover .stamps3 i:nth-child(3){transform:rotate(13deg);opacity:.85;}
.cover .stamps3 svg{width:100%;height:100%;}
.cover .kicker{font-size:14px;font-weight:800;letter-spacing:.22em;color:var(--faint);}
.cover h1{margin:12px 0 6px;font-size:40px;line-height:1.15;font-weight:800;letter-spacing:-.02em;}
.cover .sub{font-size:19px;font-weight:700;color:var(--sub);}
.cover .meta{margin-top:30px;border-top:1px solid var(--line);padding-top:24px;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:18px;text-align:left;}
.cover .meta div s{display:block;text-decoration:none;font-size:14px;color:var(--faint);font-weight:700;}
/* \u26D4 \u300C2026\uB144 5\uC6D4 ~ 2026 / \uB144 8\uC6D4\u300D\uCC98\uB7FC \uB0B1\uB9D0 \uAC00\uC6B4\uB370\uC11C \uC904\uC774 \uBC14\uB00C\uBA74 \uC548 \uB41C\uB2E4.
      \uD45C\uC9C0\uB294 \uC774 \uBB38\uC11C\uC758 \uC5BC\uAD74\uC774\uB2E4. keep-all \uB85C \uB0B1\uB9D0\uC9F8 \uB118\uAE34\uB2E4. */
.cover .meta div b{display:block;font-size:18px;font-weight:800;margin-top:3px;
  word-break:keep-all;line-height:1.4;}

/* \u2500\u2500 \uC548\uB0B4 \u2014 \uC774 \uBB38\uC11C\uAC00 \uBB34\uC5C7\uC774\uACE0 \uC65C \uC18C\uC911\uD55C\uC9C0 \u2500\u2500 */
.intro{background:var(--paper);border:1px solid var(--line2);border-radius:22px;
  padding:28px 30px;margin-top:18px;}
.intro h2{font-size:21px;font-weight:800;margin-bottom:12px;}
.intro p{font-size:16.5px;color:var(--sub);margin-bottom:10px;word-break:keep-all;}
.intro p:last-child{margin-bottom:0;}
.intro b{color:var(--ink);font-weight:800;}
.intro .keep{margin-top:16px;background:var(--acc);border-radius:14px;padding:14px 18px;
  font-size:16.5px;font-weight:700;color:#101208;}

/* \u2500\u2500 \uC7A5 \uC81C\uBAA9 \u2014 \uACC4\uC57D\uC11C\uC758 \u300C\uC81C1\uC7A5\u300D \u2500\u2500 */
.chap{display:flex;align-items:baseline;gap:12px;margin:44px 0 14px;padding:0 4px;}
.chap .no{font-size:14px;font-weight:800;letter-spacing:.16em;color:var(--sub);
  background:var(--paper);border:1px solid var(--line2);border-radius:999px;padding:5px 13px;white-space:nowrap;}
.chap h2{font-size:25px;font-weight:800;letter-spacing:-.01em;}

/* \u2500\u2500 \uD55C\uB208\uC5D0 \uBCF4\uAE30 \u2500\u2500 */
/* \uC5EC\uC12F \uCE78\uC774\uB77C **\uC138 \uCE78\uC529 \uB450 \uC904**\uB85C \uB5A8\uC5B4\uC9C0\uAC8C \uC7A1\uB294\uB2E4. \uB2E4\uC12F \uCE78 + \uD55C \uCE78\uC774 \uB418\uBA74
   \uB9C8\uC9C0\uB9C9 \uD55C \uCE78\uC774 \uD63C\uC790 \uB0A8\uC544 \uD45C\uC9C0\uCC98\uB7FC \uC548 \uBCF4\uC774\uACE0 \uD758\uB9B0 \uAC83\uCC98\uB7FC \uBCF4\uC778\uB2E4. */
.big{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;}
.big > div{background:var(--paper);border:1px solid var(--line2);border-radius:18px;padding:20px 22px;}
.big s{display:block;text-decoration:none;font-size:14.5px;color:var(--faint);font-weight:700;
  white-space:nowrap;}
/* \u26D4 \u300C1,425,020 / \uC6D0\u300D\uCC98\uB7FC \uB2E8\uC704\uAC00 \uB2E4\uC74C \uC904\uB85C \uB5A8\uC5B4\uC9C0\uBA74 \uC548 \uB41C\uB2E4.
      \uCE78\uC774 \uC881\uC73C\uBA74 \uAE00\uC528\uB97C \uC904\uC5EC\uC11C\uB77C\uB3C4 \uD55C \uC904\uC5D0 \uB2F4\uB294\uB2E4. */
.big b{display:block;font-size:clamp(20px,4.4vw,27px);font-weight:800;margin-top:5px;
  letter-spacing:-.03em;white-space:nowrap;}
.big b.in{color:var(--in);} .big b.out{color:var(--out);}

/* \u2500\u2500 \uB2EC \uD55C \uC7A5 \u2500\u2500 */
.month{background:var(--paper);border:1px solid var(--line2);border-radius:22px;
  padding:26px 28px;margin-top:14px;}
.mhead{display:flex;align-items:baseline;justify-content:space-between;
  border-bottom:2px solid var(--ink);padding-bottom:11px;margin-bottom:16px;}
.mhead h3{font-size:23px;font-weight:800;}
.mhead .mnum{font-size:15px;font-weight:700;color:var(--faint);}
.msum{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:18px;}
.msum > div{background:#FAFBF3;border:1px solid var(--line);border-radius:13px;padding:12px 14px;}
.msum s{display:block;text-decoration:none;font-size:13.5px;color:var(--faint);font-weight:700;}
.msum b{display:block;font-size:19px;font-weight:800;margin-top:3px;font-variant-numeric:tabular-nums;}
.msum b.in{color:var(--in);} .msum b.out{color:var(--out);}

/* \uB3C4\uC7A5\uD310 \u2014 \uC571\uACFC \uAC19\uC740 \uC5BC\uAD74 */
/* \u26D4 \uB3C4\uC7A5\uD310\uC774 \uC885\uC774\uB97C \uB2E4 \uB36E\uC73C\uBA74 \uC548 \uB41C\uB2E4. \uB113\uC740 \uD654\uBA74\uC5D0\uC11C \uCE78\uC774 118px \uAE4C\uC9C0 \uCEE4\uC838
      \uD55C \uB2EC\uCE58\uAC00 \uD654\uBA74\uC744 \uD1B5\uC9F8\uB85C \uC7A1\uC544\uBA39\uC5C8\uB2E4 (2026-08-03 \uADF8\uB824 \uBCF4\uACE0 \uACE0\uCE68).
      \uC571\uC5D0\uC11C \uBCF4\uB358 \uD06C\uAE30(\uCE78 44px \uC548\uD30E)\uB85C \uBB36\uC5B4 \uB454\uB2E4. */
.stamps{margin:0 0 18px;max-width:340px;}
.wkhead{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-bottom:5px;}
.wkhead span{text-align:center;font-size:12.5px;font-weight:800;color:var(--faint);}
.board{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;}
.board i{aspect-ratio:1;display:flex;align-items:center;justify-content:center;
  border-radius:10px;font-style:normal;font-size:12.5px;font-weight:700;}
.board i.pad{visibility:hidden;}
.board i.off{background:#FAFBF3;border:1px solid var(--line);color:#C3C9AE;}
.board i.on{background:#FFF3F8;border:1px solid #F6D6E5;transform:rotate(var(--rot,0deg));padding:14%;}
.board i.on svg{width:100%;height:100%;}

/* \uD45C \u2014 \uACC4\uC57D\uC11C\uC758 \uBCC4\uD45C\uCC98\uB7FC \uACA9\uC790\uB97C \uBD84\uBA85\uD788 */
table.tx{width:100%;border-collapse:collapse;margin-top:6px;}
table.tx th, table.tx td{border-bottom:1px solid var(--line);padding:10px 8px;
  font-size:15px;line-height:1.45;text-align:left;vertical-align:top;}
table.tx thead th{border-bottom:1.5px solid var(--line2);font-size:13px;font-weight:800;
  color:var(--faint);white-space:nowrap;}
table.tx td em{display:block;font-style:normal;font-size:13px;color:var(--faint);margin-top:2px;}
table.tx .d{width:56px;color:var(--sub);font-weight:700;white-space:nowrap;font-variant-numeric:tabular-nums;}
table.tx .c{color:var(--sub);white-space:nowrap;}
table.tx .n{text-align:right;white-space:nowrap;font-weight:700;font-variant-numeric:tabular-nums;}
table.tx .n.in{color:var(--in);} table.tx .n.out{color:var(--out);}
table.tx tr.fx td{background:#FBFCF6;}
table.tx tr.off td{opacity:.5;}
table.tx tr:last-child td{border-bottom:none;}
/* \u26D4 \uD45C\uB294 **\uC790\uAE30 \uC0C1\uC790 \uC548\uC5D0\uC11C** \uC606\uC73C\uB85C \uBC00\uB9B0\uB2E4 (2026-08-17 \uACE0\uCE68).
      \uC5EC\uC12F \uCE78 \uAC00\uC6B4\uB370 \uB137(\uBD84\uB958\xB7\uB0B8 \uBC29\uBC95\xB7\uB4E4\uC5B4\uC634\xB7\uB098\uAC10)\uC774 \uC548 \uB04A\uAE30\uB294 \uCE78\uC774\uB77C, 390px \uD3F0\uC5D0\uC11C
      \uD45C \uD558\uB098\uAC00 395px \uB85C \uBC8C\uC5B4\uC838 **\uBB38\uC11C \uC804\uCCB4\uAC00 515px** \uC774 \uB410\uB2E4. \uADF8\uB7EC\uBA74 \uC885\uC774\uAC00
      \uD654\uBA74\uBCF4\uB2E4 \uB113\uC5B4\uC838 \uAE00\uC774 **\uC67C\uCABD\uC73C\uB85C \uCE58\uC6B0\uCCD0** \uBCF4\uC774\uACE0, \uD654\uBA74\uC744 \uD1B5\uC9F8\uB85C \uCC0D\uC73C\uBA74
      \uADF8 \uB113\uC774\uB300\uB85C \uCC0D\uD600 **\uCEE4\uC9C4 \uADF8\uB9BC**\uC774 \uB098\uC628\uB2E4 (\uC0AC\uC7A5\uB2D8 \uC9C0\uC801 2026-08-17).
   \u26D4 \uBAB8\uD1B5\uC744 overflow:hidden \uC73C\uB85C \uB9C9\uC9C0 \uC54A\uB294\uB2E4. \uADF8\uB7EC\uBA74 \uC624\uB978\uCABD \uCE78(\uB098\uAC04 \uB3C8)\uC774
      \uC798\uB824\uC11C \uC548 \uBCF4\uC774\uB294 \uCC44\uB85C \u300C\uACE0\uCCE4\uB2E4\u300D\uAC00 \uB41C\uB2E4 \u2014 \uBCF4\uAD00\uBCF8\uC740 \uB2E4 \uBCF4\uC5EC\uC57C \uD558\uB294 \uBB38\uC11C\uB2E4. */
.txwrap{overflow-x:auto;-webkit-overflow-scrolling:touch;}
h4{font-size:17px;font-weight:800;margin:22px 0 2px;}
.none{font-size:16px;color:var(--faint);padding:16px 0;}

/* \u2500\u2500 \uB9E8 \uB4A4 \u2014 \uBC1C\uD589 \uC815\uBCF4 \u2500\u2500 */
.foot{background:var(--paper);border:1px solid var(--line2);border-radius:22px;
  padding:28px 30px;margin-top:44px;}
.foot h2{font-size:19px;font-weight:800;margin-bottom:12px;}
.foot p{font-size:15px;color:var(--sub);margin-bottom:8px;word-break:keep-all;}
.foot p:last-child{margin-bottom:0;}
.foot b{color:var(--ink);font-weight:800;}
.sign{display:flex;align-items:center;gap:12px;margin-top:22px;padding-top:18px;border-top:1px solid var(--line);}
.sign i{display:block;width:34px;height:34px;flex:none;}
.sign span{font-size:15px;color:var(--sub);font-weight:700;}
.sign span b{display:block;font-size:17px;color:var(--ink);font-weight:800;}

/* \u2500\u2500 \uD3F0\uC5D0\uC11C \uBCFC \uB54C \u2500\u2500
   \uC0C1\uC790 \uC548\uC5D0\uC11C \uBC00\uB9AC\uAC8C\uB294 \uD574 \uB480\uC9C0\uB9CC(.txwrap), **\uB418\uB3C4\uB85D \uC548 \uBC00\uACE0 \uB2E4 \uBCF4\uC774\uB294** \uAC83\uC774 \uB0AB\uB2E4.
   \uC5EC\uBC31\uACFC \uAE00\uC528\uB97C \uC870\uAE08 \uC904\uC774\uBA74 \uB300\uBD80\uBD84\uC758 \uC904\uC774 390px \uC548\uC5D0 \uB4E4\uC5B4\uC628\uB2E4. */
/* \u26D4 700px \uAE4C\uC9C0 \uB113\uD614\uB2E4 (2026-08-17 3\uCC28). 560 \uC73C\uB85C \uB450\uBA74 \uD070 \uD3F0\xB7\uC791\uC740 \uD0DC\uBE14\uB9BF\uC774 \uC0AC\uC774\uC5D0 \uB080\uB2E4. */
@media (max-width:700px){
  body{padding:18px 10px 56px;}
  /* \u26D4 \uACA9\uC790 \uCE78\uC744 **\uD55C \uC904\uB85C** \uC138\uC6B4\uB2E4. \uB450 \uCE78\uC744 \uC6B1\uC5EC\uB123\uC73C\uBA74 \uC548 \uB04A\uAE30\uB294 \uC22B\uC790\uAC00 \uCE78\uC744 \uBC00\uC5B4\uB0B8\uB2E4. */
  .big{grid-template-columns:1fr;}
  .cover .meta{grid-template-columns:1fr 1fr;}
  .msum{grid-template-columns:1fr 1fr;}
  /* \u26D4 \uC548 \uB04A\uAE30\uB358 \uC22B\uC790\uB3C4 \uC881\uC73C\uBA74 **\uAE00\uC528\uB97C \uC904\uC5EC\uC11C\uB77C\uB3C4** \uB2F4\uB294\uB2E4 \u2014 \uBC00\uC5B4\uB0B4\uC9C0 \uC54A\uB294\uB2E4. */
  .big b{font-size:clamp(18px,5.6vw,25px);}
  .msum b{font-size:17px;}
  /* \uAE34 \uC8FC\uC18C\uB098 \uBD99\uC5EC \uC4F4 \uAE34 \uAE00\uC774 \uCE78\uC744 \uBC00\uC5B4\uB0B4\uC9C0 \uC54A\uAC8C (\uB0B4\uC5ED \uBA54\uBAA8\uC5D0 \uB4E4\uC5B4\uC62C \uC218 \uC788\uB2E4) */
  table.tx td, .intro p, .foot p, .cover .meta div b{overflow-wrap:anywhere;}
  .cover{padding:36px 20px 26px;border-radius:20px;}
  .cover h1{font-size:31px;}
  .intro,.foot{padding:22px 18px;border-radius:18px;}
  .month{padding:20px 14px;border-radius:18px;}
  table.tx th, table.tx td{padding:9px 4px;font-size:13.5px;}
  table.tx thead th{font-size:12px;}
  table.tx .d{width:42px;}
  /* \uBD84\uB958\xB7\uB0B8 \uBC29\uBC95\uC740 \uC904\uC744 \uBC14\uAFD4\uB3C4 \uB41C\uB2E4. \uB0B1\uB9D0\uC9F8 \uB118\uACA8\uC11C \u300C\uCE74\uD398\xB7\uAC04 / \uC2DD\u300D\uC774 \uC548 \uB418\uAC8C. */
  table.tx .c{white-space:normal;word-break:keep-all;}
  table.tx td em{font-size:12px;}
}

/* \u2500\u2500 \uC885\uC774\uB85C \uBF51\uC744 \uB54C \u2500\u2500 */
@media print{
  /* \u26D4 \uC885\uC774\uC5D0\uC11C\uB294 \uBC00 \uC218\uAC00 \uC5C6\uB2E4. \uC0C1\uC790\uB97C \uD480\uC5B4 \uD45C\uB97C \uD1B5\uC9F8\uB85C \uC549\uD78C\uB2E4. */
  .txwrap{overflow:visible;}
  body{background:#fff;padding:0;font-size:11.5pt;}
  .cover,.intro,.month,.foot{box-shadow:none;border-color:#ccc;break-inside:avoid;}
  .cover{page-break-after:always;}
  .month{page-break-inside:auto;}
  .chap{page-break-after:avoid;}
  table.tx thead{display:table-header-group;}
}
</style>
</head>
<body>
<div class="wrap">

  <div class="cover">
    <div class="stamps3">
      <i>${\uB3C4\uC7A5("#E8328A")}</i><i>${\uB3C4\uC7A5("#E8328A")}</i><i>${\uB3C4\uC7A5("#E8328A")}</i>
    </div>
    <div class="kicker">\uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8</div>
    <h1>\uC7A5\uBD80 \uBCF4\uAD00\uBCF8</h1>
    <div class="sub">\uC801\uC5B4 \uB450\uC2E0 \uAC83\uC744 \uADF8\uB300\uB85C \uB2F4\uC558\uC2B5\uB2C8\uB2E4</div>
    <div class="meta">
      <div><s>\uB2F4\uAE34 \uAE30\uAC04</s><b>${\uAE30\uAC04}</b></div>
      <div><s>\uC801\uC73C\uC2E0 \uAC83</s><b class="num">${won(\uCD1D\uAC74\uC218)}\uAC74</b></div>
      <div><s>\uBAA8\uC740 \uB3C4\uC7A5</s><b class="num">${won(\uCD1D\uB3C4\uC7A5)}\uAC1C</b></div>
      <div><s>\uBC1B\uC73C\uC2E0 \uB0A0</s><b>${esc(\uBC1B\uC740\uB0A0 || "")}</b></div>
    </div>
  </div>

  <div class="intro">
    <h2>\uC774 \uBB38\uC11C\uC5D0 \uB300\uD558\uC5EC</h2>
    <p>\uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8\uC5D0 \uC801\uC5B4 \uB450\uC2E0 <b>\uC7A5\uBD80 \uC804\uCCB4</b>\uC785\uB2C8\uB2E4.
      \uB0B4\uC5ED\uBFD0 \uC544\uB2C8\uB77C <b>\uB9E4\uB2EC \uB098\uAC00\uB294 \uB3C8 \xB7 \uB3C4\uC7A5 \uAE30\uB85D \xB7 \uCE74\uB4DC \uC815\uBCF4 \xB7 \uC124\uC815</b>\uAE4C\uC9C0 \uB4E4\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</p>
    <p>\uC774 \uD30C\uC77C \uC548\uC5D0 <b>\uC790\uB8CC\uC640 \uBCF4\uC5EC\uC8FC\uB294 \uAC83\uC774 \uD568\uAED8</b> \uB4E4\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uC11C
      <b>\uC778\uD130\uB137\uC774 \uC5C6\uC5B4\uB3C4</b>, <b>\uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8\uC774 \uBB38\uC744 \uB2EB\uC544\uB3C4</b> \uC774 \uD30C\uC77C\uB9CC \uC788\uC73C\uBA74 \uADF8\uB300\uB85C \uC5F4\uB9BD\uB2C8\uB2E4.
      \uBC14\uAE65\uC5D0\uC11C \uBD88\uB7EC\uC624\uB294 \uAC83\uC774 \uD558\uB098\uB3C4 \uC5C6\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.</p>
    <p>\uBCF4\uC2DC\uAE30\uB9CC \uD560 \uC218 \uC788\uACE0 \uACE0\uCE60 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4. <b>\uBC1B\uC73C\uC2E0 \uB0A0\uC758 \uC7A5\uBD80\uAC00 \uADF8\uB300\uB85C \uB0A8\uC2B5\uB2C8\uB2E4.</b></p>
    <div class="keep">\uD30C\uC77C\uC744 \uBA54\uC77C\uD568\uC774\uB098 \uD074\uB77C\uC6B0\uB4DC\uC5D0 \uD55C \uBD80 \uB354 \uB450\uC138\uC694. \uADF8\uB7EC\uBA74 \uD3F0\uC744 \uC783\uC5B4\uBC84\uB824\uB3C4 \uB0A8\uC2B5\uB2C8\uB2E4.</div>
  </div>

  <div class="chap"><span class="no">\uC81C 1 \uC7A5</span><h2>\uD55C\uB208\uC5D0 \uBCF4\uAE30</h2></div>
  <div class="big">
    <div><s>\uB4E4\uC5B4\uC628 \uB3C8</s><b class="in num">${won(\uCD1D\uC218\uC785)}\uC6D0</b></div>
    <div><s>\uB098\uAC04 \uB3C8</s><b class="out num">${won(\uCD1D\uC9C0\uCD9C)}\uC6D0</b></div>
    <div><s>\uC2DC\uC791 \uC794\uC561</s><b class="num">${won(cfg.opening)}\uC6D0</b></div>
    <div><s>\uAC00\uC7A5 \uAE38\uAC8C \uC774\uC5B4\uAC10</s><b class="num">${won((nsRun || {}).days || 0)}\uC77C</b></div>
    <div><s>\uD55C \uB2EC \uCD5C\uACE0 \uB3C4\uC7A5</s><b class="num">${won((nsBest || {}).days || 0)}\uAC1C</b>
      ${nsBest && nsBest.m ? `<s style="margin-top:4px">${\uB2EC\uC774\uB984(nsBest.m)}</s>` : ""}</div>
    <div><s>\uC801\uC740 \uB2EC</s><b class="num">${months.length}\uB2EC</b></div>
  </div>

  <div class="chap"><span class="no">\uC81C 2 \uC7A5</span><h2>\uB2EC\uB9C8\uB2E4</h2></div>
  ${\uB2EC\uC7A5 || '<p class="none">\uC801\uC740 \uB2EC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}

  <div class="chap"><span class="no">\uC81C 3 \uC7A5</span><h2>\uB9E4\uB2EC \uB098\uAC00\uB294 \uB3C8</h2></div>
  <div class="month">${\uACE0\uC815\uC7A5}</div>

  <div class="chap"><span class="no">\uC81C 4 \uC7A5</span><h2>\uCE74\uB4DC</h2></div>
  <div class="month">${\uCE74\uB4DC\uC7A5}</div>

  <div class="foot">
    <h2>\uBC1C\uD589 \uC815\uBCF4</h2>
    <p>\uC774 \uBB38\uC11C\uB294 <b>${esc(\uBC1B\uC740\uB0A0 || "")}</b>\uC5D0 \uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8\uC5D0\uC11C \uB9CC\uB4E4\uC5B4\uC84C\uC2B5\uB2C8\uB2E4.
      \uB9CC\uB4E0 \uC2DC\uC810\uC758 \uC7A5\uBD80\uB97C \uB2F4\uACE0 \uC788\uC73C\uBA70, \uADF8 \uB4A4\uC5D0 \uC801\uC73C\uC2E0 \uAC83\uC740 \uB4E4\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p>
    <p>\uC0C8\uB85C \uBC1B\uC73C\uC2DC\uB824\uBA74 \uC571\uC5D0\uC11C <b>\uC124\uC815 \u2192 \u300C\uD30C\uC77C\uB85C \uC804\uBD80 \uB0B4\uB824\uBC1B\uAE30\u300D</b>\uB97C \uB204\uB974\uC138\uC694.
      <b>\uB2EC\uB9C8\uB2E4 \uD55C \uBC88\uC529</b> \uBC1B\uC544 \uB450\uC2DC\uAE30\uB97C \uAD8C\uD569\uB2C8\uB2E4.</p>
    <p>\uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8\uC740 <b>\uD55C \uC0AC\uB78C\uC774 \uB9CC\uB4E4\uACE0 \uD63C\uC790 \uC6B4\uC601\uD569\uB2C8\uB2E4.</b>
      \uADF8 \uC0AC\uB78C\uC774 \uC774\uC5B4\uAC08 \uC218 \uC5C6\uAC8C \uB418\uB354\uB77C\uB3C4 <b>\uC774 \uD30C\uC77C\uC740 \uC190\uB2D8 \uAC83\uC73C\uB85C \uB0A8\uC2B5\uB2C8\uB2E4.</b>
      \uADF8\uB7EC\uB77C\uACE0 \uB9CC\uB4E0 \uBB38\uC11C\uC785\uB2C8\uB2E4.</p>
    <div class="sign">
      <i>${\uB3C4\uC7A5("#E8328A")}</i>
      <span>\uB9CC\uB4E0 \uACF3<b>\uCE74\uD504\uCE74\uB85C\uD0A4 \xB7 \uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8</b></span>
    </div>
  </div>

</div>
</body>
</html>`;
  }

  // keep/auth-shim.js
  init_define_KEEP_PRECACHE();
  init_define_KEEP_PUBKEY();
  var PIN_LOGIN_ON = false;
  var KAKAO_ON = false;
  var GOOGLE_ON = false;
  var SOCIAL_ON = false;
  var requireAuth = () => false;
  var isAuthed = () => true;
  var whoOf = () => "keep";
  var whoKind = () => "keep";
  var issue = () => {
  };
  var clear = () => {
  };
  var checkPin = async () => ({ ok: false });
  var sendPinFailure = (res) => res.status(403).json({ ok: false, err: "\uACC4\uC18D \uC4F0\uAE30\uD310\uC5D0\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC5C6\uC5B4\uC694." });

  // keep/lic-shim.js
  init_define_KEEP_PRECACHE();
  init_define_KEEP_PUBKEY();
  var \uACF5\uAC1C\uD0A4JWK = define_KEEP_PUBKEY_default;
  var \uB3C4\uC7A5\uC790\uB9AC = "keep:lic";
  var b64u = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4)), (c) => c.charCodeAt(0));
  async function \uB3C4\uC7A5\uD655\uC778(token) {
    try {
      const [\uBCF8\uBB38, \uC11C\uBA85] = String(token || "").split(".");
      if (!\uBCF8\uBB38 || !\uC11C\uBA85 || !\uACF5\uAC1C\uD0A4JWK) return null;
      const key = await crypto.subtle.importKey("jwk", \uACF5\uAC1C\uD0A4JWK, { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
      const ok = await crypto.subtle.verify({ name: "ECDSA", hash: "SHA-256" }, key, b64u(\uC11C\uBA85), new TextEncoder().encode(\uBCF8\uBB38));
      if (!ok) return null;
      const p = JSON.parse(new TextDecoder().decode(b64u(\uBCF8\uBB38)));
      return p && p.v === 1 && p.paid ? p : null;
    } catch (e) {
      return null;
    }
  }
  async function licOf() {
    const \uB3C4\uC7A52 = await get(\uB3C4\uC7A5\uC790\uB9AC);
    const p = \uB3C4\uC7A52 && \uB3C4\uC7A52.token ? await \uB3C4\uC7A5\uD655\uC778(\uB3C4\uC7A52.token) : null;
    return { paid: !!p, owner: false, first: "", at: p && p.at || "", pid: "", amt: p && p.amt || 0, wrote: 0 };
  }
  function licView(lic) {
    return {
      paid: !!lic.paid,
      trialDays: 0,
      left: null,
      canWrite: !!lic.paid,
      since: "",
      paidAt: lic.at || "",
      paidAmt: lic.amt || 0,
      refundable: false,
      refundWhy: "",
      refundUntil: "",
      wrote: 0,
      price: 15e3,
      list: 15e3,
      early: false,
      earlyLeft: 0,
      sold: 0,
      max: 0,
      keep: true
    };
  }
  function writeBlocked(lic) {
    if (lic && lic.paid) return null;
    return {
      ok: false,
      keepLocked: true,
      err: "\uACC4\uC18D \uC4F0\uAE30\uD310\uC5D0\uC11C \uC0C8\uB85C \uC801\uC73C\uB824\uBA74, \uC774\uC6A9\uAD8C\uC744 \uC0B0 \uACC4\uC815\uC5D0\uC11C \uBC1B\uC740 \u300C\uC7A5\uBD80 \uBCF4\uAD00\uBCF8\u300D\uC744 \uBD88\uB7EC\uC640 \uC8FC\uC138\uC694. \uC124\uC815 \u2192 \uD1B5\uC9F8\uB85C \uCC59\uACA8 \uB450\uAE30 \u2192 \uD30C\uC77C\uC5D0\uC11C \uB418\uC0B4\uB9AC\uAE30."
    };
  }
  async function bumpWrote() {
  }
  async function \uB3C4\uC7A5\uB9CC\uB4E4\uAE30() {
    return "";
  }
  async function soldCount() {
    return 0;
  }

  // keep/shutdown-shim.js
  init_define_KEEP_PRECACHE();
  init_define_KEEP_PUBKEY();
  async function \uC9C0\uAE08\uB2E8\uACC4() {
    return { \uB2E8\uACC4: "\uC5C6\uC74C" };
  }

  // api/ledger.js
  var kst = () => new Date(Date.now() + 9 * 3600 * 1e3);
  var today10 = () => kst().toISOString().slice(0, 10);
  var curMonth = () => kst().toISOString().slice(0, 7);
  var wsOf = (req) => whoOf(req);
  var keys = (ws) => ({
    cfg: `lb:${ws}:cfg`,
    months: `lb:${ws}:months`,
    tx: (m) => `lb:${ws}:tx:${m}`,
    sum: (m) => `lb:${ws}:sum:${m}`,
    fixed: `lb:${ws}:fixed`,
    rev: `lb:${ws}:fixedRev`,
    mat: (m) => `lb:${ws}:mat:${m}`,
    note: (m) => `lb:${ws}:note:${m}`,
    // 이번 달 한 마디
    /* 체크할 것 — ⛔ **달에 묶이지 않는다.** 달이 바뀌어도 그대로 남는다 (사장님 지시 2026-08-25).
       한 마디(note)는 그 달 이야기라 달마다 따로지만, 이건 「아직 안 한 일」이라 달이 상관없다. */
    checks: `lb:${ws}:checks`,
    nsBest: `lb:${ws}:nsBest`,
    // 안 쓴 날 한 달 최고 기록 {days, m}
    nsRun: `lb:${ws}:nsRun`,
    // 이어간 날 최고 기록 {days}
    nsLog: `lb:${ws}:nsLog`,
    // 달마다 안 쓴 날 수 {'2026-07':27,...} — 누적 도장 세는 원장
    use: `lb:${ws}:use`,
    // 「잘 쓰고 계세요?」 답 { 키: {v,at,ask} }
    /* 방금 지운 고정지출 한 벌 — 「되돌리기」가 **지우기 전 그대로** 되살린다 (2026-09-18 교차검증).
       ⛔ 새로 넣기(add)로 되살리지 않는다 : 이용권이 없는 분은 402 로 막히고, 줄이 오늘 시각(ts)으로 다시 적혀 잔액이 한 번 더 빠진다. */
    undoFx: `lb:${ws}:undoFx`,
    // { id, item, rows: {달: [줄]}, at } · 10분
    bills: `lb:${ws}:bills`,
    // 카드사가 알려준 청구액 { '롯데카드|2026-08-10': 927770 }
    /* 자료가 바뀔 때마다 1씩 오르는 번호. 폰과 PC 가 같은 장부를 보게 하는 열쇠다.
       ⛔ 위의 rev(fixedRev)와 다른 것이다 — 그건 「고정지출 정의가 바뀌었나」만 본다.
          이건 **무엇이든 바뀌면** 오른다. 다른 기기는 이 번호만 물어보고, 달라졌을 때만 다시 받는다.
          (장부 전체를 계속 받아 보면 저장소 요금이 감당이 안 된다) */
    drev: `lb:${ws}:drev`
  });
  var FX_KEY = "lb:fx:usd";
  var OWNER_SEEN = "lb:sys:ownerSeen";
  var REELS = "lb:sys:reels";
  var REELS_CFG = "lb:sys:reelsCfg";
  var REELS_GIFT = [
    /* n = 제 이름 · s = 띠에 쓰는 짧은 이름 · w = 표에 쓰는 단위말 · u = 띠에 쓰는 한 글자 단위
       ⛔ 띠는 한 줄이라 「AI 오브 영상 1편」이 들어가면 줄이 접힌다. 짧은 이름을 따로 둔다. */
    { id: "card", n: "\uB85C\uD0A4\uBA85\uD568", s: "\uBA85\uD568", w: "\uC7A5 \uBC1C\uD589", u: "\uC7A5", q: 1, v: 15e3 },
    { id: "orb", n: "AI \uC624\uBE0C \uC601\uC0C1", s: "\uC624\uBE0C", w: "\uD3B8", u: "\uD3B8", q: 1, v: 1e4 },
    { id: "news", n: "\uCE74\uB4DC\uB274\uC2A4", s: "\uCE74\uB4DC\uB274\uC2A4", w: "\uC7A5 \uC800\uC7A5", u: "\uC7A5", q: 5, v: 1e3 }
  ];
  var \uAFB8\uB7EC\uBBF8 = () => {
    const o = {};
    REELS_GIFT.forEach((x) => {
      o[x.id] = x.q;
    });
    return o;
  };
  var REELS_DAYS = 90;
  var REELS_UP = 1;
  var REELS_FIX_DAYS = 7;
  var REELS_TEXT = "lb:sys:reelsText";
  var REELS_TEXT_\uAE30\uBCF8 = {
    title: "\uC601\uC0C1\xB7\uAE00 \uC62C\uB9AC\uACE0 \uC140\uD504\uC81C\uC791 \uAFB8\uB7EC\uBBF8 \uBC1B\uAE30",
    /* ⛔ 첫 줄 뒤에 쉼표를 찍지 않는다 (사장님 지시 2026-08-28). 줄이 바뀌면 쉼표는 군더더기다.
       ⛔ 「번호」가 아니라 **「꾸러미」**를 드린다 (같은 날). 손님이 받는 것은 번호가 아니라
          만들 수 있는 것들이다. 번호는 그걸 쓰는 열쇠일 뿐이라 셋째 줄에서 말한다. */
    lead: "\uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8\uC744 *\uC601\uC0C1\uC774\uB098 \uAE00\uB85C \uC54C\uB824 \uC8FC\uC2DC\uBA74*\n\uCE74\uD504\uCE74\uB85C\uD0A4 \uC140\uD504\uC81C\uC791\uC744 \uC774\uB9CC\uD07C \uD558\uC2E4 \uC218 \uC788\uB294 \uAFB8\uB7EC\uBBF8\uB97C \uB4DC\uB824\uC694.\n\uBCF4\uB0B4\uC2DC\uBA74 *\uBC14\uB85C \uCFE0\uD3F0\uC774 \uB098\uC640\uC694.* \uAE30\uB2E4\uB9AC\uC2E4 \uAC83 \uC5C6\uC5B4\uC694.",
    rules: "\uAC00\uACC4\uBD80 \uD654\uBA74\uC774 \uB098\uC62C \uAC83 \xB7 \uC601\uC0C1\uC774\uBA74 \uC4F0\uB294 \uBAA8\uC2B5, \uAE00\uC774\uBA74 \uC0AC\uC9C4\n\uC124\uBA85\uC5D0 \uC8FC\uC18C \uD55C \uC904 \xB7 *iamagoodperson.vercel.app*\n\uD3EC\uC2A4\uD305\uC5D0 \u300C*\uCFE0\uD3F0\uC744 \uBC1B\uACE0 \uC62C\uB838\uC5B4\uC694*\u300D \uD55C \uC904 (\uBC95\uC73C\uB85C \uC815\uD574\uC9C4 \uD45C\uC2DC\uC608\uC694)\n\uC62C\uB9AC\uC2E0 \uB4A4 *30\uC77C*\uC740 \uADF8\uB300\uB85C \uB450\uC2DC\uAE30",
    steps: "*\uC140\uD504\uC81C\uC791*\uC73C\uB85C \uAC00\uC11C \uB9CC\uB4E4 \uAC83\uC744 \uACE0\uB985\uB2C8\uB2E4\n\uD654\uBA74\uC5D0\uC11C *\uB05D\uAE4C\uC9C0 \uB9CC\uB4ED\uB2C8\uB2E4* \xB7 \uB9CC\uB4DC\uB294 \uB3D9\uC548\uC740 \uBB34\uB8CC\uC608\uC694\n\uC800\uC7A5\xB7\uBC1C\uD589\uC744 \uB204\uB974\uAE30 \uC804\uC5D0 *\uCE74\uCE74\uC624\uD1A1\uC73C\uB85C \uBC88\uD638*\uB97C \uBCF4\uB0C5\uB2C8\uB2E4\n\uC5F4\uC5B4 \uB4DC\uB9AC\uBA74 *\uADF8 \uC790\uB9AC\uC5D0\uC11C* \uBC1B\uC73C\uC2DC\uBA74 \uB3FC\uC694"
  };
  var REELS_HOSTS = [
    "instagram.com",
    "tiktok.com",
    "youtube.com",
    "youtu.be",
    "threads.net",
    "blog.naver.com",
    "post.naver.com",
    "cafe.naver.com",
    "tistory.com",
    "brunch.co.kr"
  ];
  var \uBA70\uCE60\uB4A4 = (n) => new Date(Date.now() + (9 * 3600 + n * 86400) * 1e3).toISOString().slice(0, 10);
  function \uBC88\uD638\uB9CC\uB4E4\uAE30() {
    const \uAE00\uC790 = "ACDEFGHJKLMNPQRTUVWXY34789";
    let out = "";
    for (let i = 0; i < 6; i++) out += \uAE00\uC790[Math.floor(Math.random() * \uAE00\uC790.length)];
    return "KR-" + out;
  }
  var \uBCF8\uB0A0\uBA54\uBAA8 = "";
  var TYPES = ["etc", "inst", "loan", "ins", "sub", "card", "tel", "give", "beauty", "mom"];
  var DEFAULT_CFG = () => ({
    opening: 0,
    openingMonth: curMonth(),
    cats: {
      /* 사장님이 실제로 쓰는 항목을 그대로 담았다(2026-07-29).
             ⛔ 여기 이름을 고치면 [[안 쓴 날]]의 skipCats 도 같이 봐야 한다.
      
             ⛔ **차례는 「많이 쓰는 순」이다** (사장님 지시 2026-08-12 : 「분류를 가장 빈도수가
                많은 것을, 고객이 맨 처음 쓰지 않더라도 미리 기본으로 노출시키자」).
                예전 차례는 성격별 묶음이었다 — 밥·차비 다음에 편집툴·도메인처럼 그 사람만 쓰는 것이
                바로 나왔다. 아무것도 안 적어 본 손님에게는 **앱이 정한 이 차례가 곧 첫 화면**이다.
                날마다 손이 가는 것(식비·카페·마트·교통비)이 앞에, 한 해에 몇 번인 것(세금·경조사)과
                일하는 사람만 쓰는 것(편집툴·외주비·광고비)이 뒤에 온다.
             ⛔ 이름은 하나도 빼거나 더하지 않았다. **차례만** 바꾼 것이다(38개 그대로).
             ⛔ 이 차례는 **처음 오시는 분에게만** 먹는다. 이미 쓰고 계신 분은 저장된 cfg.cats 를
                그대로 쓰고, 화면 차례는 pickOrder 가 그 사람이 실제로 쓴 횟수로 다시 세운다.
                (사장님 앱은 그래서 안 바뀐다 — 바꾸려면 설정에서 칩을 옮기셔야 한다) */
      out: [
        "\uC2DD\uBE44",
        "\uCE74\uD398\xB7\uAC04\uC2DD",
        "\uB9C8\uD2B8\xB7\uC0DD\uD544\uD488",
        "\uAD50\uD1B5\uBE44",
        "\uC0DD\uD65C\uC6A9\uD488",
        "\uC810\uC2EC",
        "\uBCD1\uC6D0\xB7\uC57D",
        "\uAD6C\uB3C5",
        "\uD1B5\uC2E0\uBE44",
        "\uD0DD\uBC30\uBE44",
        "\uBBF8\uC6A9",
        "\uC637",
        "\uCDE8\uBBF8\xB7\uC624\uB77D",
        "\uACBD\uC870\uC0AC",
        "\uD5EC\uC2A4\xB7\uC6B4\uB3D9",
        "\uACF5\uACFC\uAE08",
        "\uD560\uBD80",
        "\uBCF4\uD5D8",
        "\uAC74\uAC15\uBCF4\uD5D8",
        "\uB300\uCD9C\uC774\uC790",
        "\uCE74\uB4DC\uB300\uAE08",
        /* 헌금은 교회 쓰임대로 셋으로 나눈다 (사장님 정리 2026-07-30)
           일반헌금 : 주일헌금·범사감사처럼 늘 드리는 것 (십일조는 따로 세느라 분류를 뺐다)
           절기헌금 : 맥추감사·추수감사·부활절·성탄절·신년감사
           특별헌금 : 건축·선교·구제·장학처럼 목적이 있는 것 */
        "\uC2ED\uC77C\uC870",
        "\uC77C\uBC18\uD5CC\uAE08",
        "\uC808\uAE30\uD5CC\uAE08",
        "\uD2B9\uBCC4\uD5CC\uAE08",
        /* ⛔ 「팔 수 있는 것」과 「못 파는 것」을 한 분류에 담지 말 것.
           집은 못 팔고 가전은 팔 수 있다. 반려동물은 못 팔고 그 용품은 팔 수 있다.
           뭉뚱그리면 「잘 쓰고 계세요?」가 엉뚱한 걸 묻는다. */
        "\uAC00\uC804\uC81C\uD488",
        "\uC0AC\uBB34\uC6A9\uD488",
        "\uBC18\uB824\uB3D9\uBB3C",
        "\uBC18\uB824\uB3D9\uBB3C \uC6A9\uD488",
        /* 여기부터는 **일하는 사람만 쓰는 것**이다. 날마다 적는 자리에서는 뒤에 있어야 한다.
           (「취미·오락」은 위로 올렸다 — 로또·게임·영화처럼 재미로 쓰는 돈은 자주 나가고,
            「기타」에 묻히면 얼마나 쓰는지 영영 안 보인다 · 사장님 2026-08-03) */
        "\uD3B8\uC9D1\uD234",
        "\uB3C4\uBA54\uC778\xB7\uC11C\uBC84",
        "\uC7AC\uB8CC\uBE44",
        "\uC678\uC8FC\uBE44",
        "\uAD11\uACE0\uBE44",
        "\uC784\uB300\uB8CC",
        "\uC138\uAE08",
        "\uC218\uC218\uB8CC",
        "\uAE30\uD0C0"
      ],
      in: ["\uB9E4\uCD9C", "\uC6A9\uB3C8", "\uC911\uACE0\uD310\uB9E4", "\uD658\uAE09", "\uC9C0\uC6D0\uAE08", "\uC774\uC790", "\uAE30\uD0C0"]
    },
    pays: ["\uCE74\uB4DC", "\uCCB4\uD06C\uCE74\uB4DC", "\uACC4\uC88C\uC774\uCCB4", "\uC790\uB3D9\uC774\uCCB4", "\uD604\uAE08", "\uB124\uC774\uBC84\uD398\uC774", "\uCE74\uCE74\uC624\uD398\uC774", "\uAE30\uD0C0"],
    // 손님이 직접 넣은 스티커 (2026-08-12). 우리 것(app.js STICKERS) 뒤에 붙는다.
    stickers: [],
    /* 분류 차례를 손수 정하셨나. 처음 오신 분은 꺼져 있다 — 아무것도 안 골라 본 사람에게
       「내가 정한 순서」란 게 있을 리 없다. 설정에서 한 줄이라도 옮기면 그때 켜진다. */
    catManual: false,
    /* 카드 — 카드로 썼지만 아직 통장에서 안 빠진 돈을 세기 위한 것.
       close = 그 날짜까지 쓴 것을 모은다 · payday = 다음 달 그 날에 빠진다
       pay = 이 카드로 친다고 볼 「결제수단」 이름 (내역에 적힌 그대로) */
    cards: [{ name: "\uCE74\uB4DC", pay: "\uCE74\uB4DC", close: 26, payday: 10 }],
    /* 「안 쓴 날」을 셀 때 못 본 척할 돈.
       직장인은 교통비·점심이 매일 나가서, 이걸 빼주지 않으면 첫날부터 탈락이라 아무도 안 한다. */
    skipCats: ["\uAD50\uD1B5\uBE44", "\uC810\uC2EC"],
    skipFixed: true,
    // 저절로 적히는 고정지출은 언제나 뺀다 (월세 나간 날을 쓴 날로 치면 억울하다)
    budget: 0,
    // 이번 달 쓸 수 있는 돈 상한. 0 이면 안 쓰는 것으로 본다.
    theme: "lime",
    font: "free",
    stamp: "heart",
    // 안 쓴 날에 찍히는 도장 모양
    zoom: 1.45,
    // PC 글씨 크기 배율 (넓은 화면에서만 쓴다). app.js 의 ZDEF 와 같아야 한다
    /* 버티기 — 일을 쉬는 동안 「가진 돈으로 몇 달 버티나」를 세는 자리.
       on 이면 예산 대신 이 계산을 보여준다. have = 지금 가진 돈. */
    hold: { on: false, have: 0, note: "" },
    fx: "sparkle"
    // 마우스 효과 (PC 에서만 보인다)
  });
  var isMonth = (s) => /^\d{4}-(0[1-9]|1[0-2])$/.test(String(s || ""));
  var isDate = (s) => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(String(s || ""));
  var money = (v) => Math.round(Number(String(v == null ? "" : v).replace(/[^\d.-]/g, "")) || 0);
  var clean = (v, max) => String(v == null ? "" : v).replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max || 60);
  var \uCE74\uB4DC\uC774\uB984\uB4E4 = (c) => [...new Set([c && (c.pay || c.name), c && c.name].concat(c && Array.isArray(c.also) ? c.also : []).map((x) => String(x || "").trim()).filter(Boolean))];
  var newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  var slug = (v, max) => String(v == null ? "" : v).replace(/[^a-z0-9_-]/gi, "").slice(0, max || 24);
  function dayOf(m, day) {
    const [y, mo] = m.split("-").map(Number);
    const last = new Date(Date.UTC(y, mo, 0)).getUTCDate();
    const d = Math.min(Math.max(Number(day) || 1, 1), last);
    return m + "-" + String(d).padStart(2, "0");
  }
  function monthRange(from, to) {
    const out = [];
    let [y, m] = from.split("-").map(Number);
    const [ty, tm] = to.split("-").map(Number);
    let guard = 0;
    while ((y < ty || y === ty && m <= tm) && guard++ < 600) {
      out.push(y + "-" + String(m).padStart(2, "0"));
      if (++m > 12) {
        m = 1;
        y++;
      }
    }
    return out;
  }
  var \uBAA8\uC73C\uB294\uBD84\uB958 = ["\uC800\uCD95", "\uD22C\uC790"];
  var tally = (tx) => tx.reduce((a, t) => {
    if (t.k === "in") a.in += t.amt;
    else if (t.k === "mv") {
      a.mv += t.amt;
      if (\uBAA8\uC73C\uB294\uBD84\uB958.includes(t.cat)) {
        a.save += t.amt;
        if (t.cat === "\uC800\uCD95") a.saveA += t.amt;
        else a.saveB += t.amt;
      }
    } else {
      a.out += t.amt;
      if (t.cat === "\uC2ED\uC77C\uC870") a.tithe += t.amt;
    }
    return a;
  }, { in: 0, out: 0, mv: 0, tithe: 0, save: 0, saveA: 0, saveB: 0 });
  var byDate = (a, b) => a.d === b.d ? (b.ts || 0) - (a.ts || 0) : a.d < b.d ? 1 : -1;
  async function getCfg(K) {
    const saved = await get(K.cfg);
    const cfg = Object.assign(DEFAULT_CFG(), saved || {});
    cfg.cats = Object.assign(DEFAULT_CFG().cats, saved && saved.cats || {});
    return cfg;
  }
  async function saveMonth(K, m, tx) {
    tx = \uACB9\uCE5C\uC790\uB3D9\uC904\uBE7C\uAE30(tx).tx;
    tx.sort(byDate);
    const months = await get(K.months) || [];
    const pairs = [[K.tx(m), tx], [K.sum(m), tally(tx)]];
    if (!months.includes(m)) {
      months.push(m);
      months.sort();
      pairs.push([K.months, months]);
    }
    await mset(pairs);
  }
  var DEMO_WS = "__demo__";
  var DEMO_SEED = `lb:${DEMO_WS}:seed`;
  var DEMO_SEED_V = 5;
  async function \uC608\uC2DC\uCC44\uC6B0\uAE30(m) {
    try {
      const \uD45C = m + "#" + DEMO_SEED_V;
      if (await get(DEMO_SEED) === \uD45C) return false;
      const K = keys(DEMO_WS);
      const \uC624\uB298\uC77C = Number(today10().slice(8, 10)) || 28;
      const \uB05D = Math.max(4, Math.min(28, \uC624\uB298\uC77C));
      const \uB0A0 = (d) => m + "-" + String(Math.max(1, Math.min(\uB05D, Math.round(d * \uB05D / 30)))).padStart(2, "0");
      let \uBC88 = 0;
      const t = (d, k, amt, cat, pay, memo) => ({ id: "demo" + ++\uBC88, d: \uB0A0(d), k, amt, cat, pay, memo, ts: 0, st: "" });
      const cfg = {
        opening: 0,
        openingMonth: m,
        cats: {
          out: [
            "\uC2DD\uBE44",
            "\uCE74\uD398\xB7\uAC04\uC2DD",
            "\uB9C8\uD2B8\xB7\uC0DD\uD544\uD488",
            "\uAD50\uD1B5\uBE44",
            "\uAD6C\uB3C5",
            "\uD1B5\uC2E0\uBE44",
            "\uBCD1\uC6D0\xB7\uC57D",
            "\uB300\uCD9C\uC774\uC790",
            "\uBCF4\uD5D8",
            "\uC2ED\uC77C\uC870",
            "\uC77C\uBC18\uD5CC\uAE08",
            "\uD560\uBD80",
            "\uBBF8\uC6A9",
            "\uC637"
          ],
          in: ["\uB9E4\uCD9C", "\uC6A9\uB3C8", "\uD658\uAE09", "\uC911\uACE0\uD310\uB9E4"]
        },
        pays: ["\uCE74\uB4DC", "\uCCB4\uD06C\uCE74\uB4DC", "\uACC4\uC88C\uC774\uCCB4", "\uC790\uB3D9\uC774\uCCB4", "\uD604\uAE08", "\uCE74\uCE74\uC624\uD398\uC774"],
        cards: [{ name: "\uB86F\uB370\uCE74\uB4DC", pay: "\uCE74\uB4DC", close: 26, payday: 10 }],
        /* 버티기 모드로 켜 둔다 — 파는 페이지가 보여줄 것이 바로 이 화면이다.
           ⛔ haveAt 을 옛날로 둔다. 예시 줄은 ts:0 이라 그 뒤로 안 세어져 잔액이 딱 이 값이다. */
        /* ⛔ 가진 돈은 **빠듯하게** 둔다. 하루 26,000원이 남는 예시로는 「버티기」가
           무슨 말인지 안 보인다 — 이 앱이 파는 것은 넉넉함이 아니라 **버티는 법**이다.
           🔴 **결제일이 지난 뒤를 기준으로 잡는다** (2026-09-12, 사장님 결정).
              앞서 735,000 은 「달 초」만 보고 잡은 값이었다. 그런데 10일이 지나면 통장에서
              카드값 450,000 과 그날 고정지출 151,960 이 진짜로 빠져나가, 남는 돈이
              **-100,481원**이 됐다 — 파는 화면과 폰 속 앱이 나란히 「하루 두 끼에 0원」을
              말하고 있었다. 예시 인물이 이미 망한 사람으로 보이면 살 까닭이 안 보인다.
              925,000 − 151,960(지나간 고정) − 450,000(빠져나간 카드값) = 323,040
              323,040 − 은행 53,321 − 카드 180,200 = 89,519 → 하루 2,983원 · 한 끼 1,491원.
              처음에 적어 둔 뜻(하루 2,990 · 한 끼 1,495)이 그제야 달 내내 선다.
           ⛔ 이 값을 고치면 **위 DEMO_SEED_V 를 같이 올린다.** 안 올리면 이미 심어 둔 장부가
              그대로라 화면이 안 바뀐다.
           ⛔ haveAt 을 1(아주 옛날)로 둔다. 예시 줄은 ts:0 이라 그 뒤로 안 세어져
              잔액이 딱 이 값으로 선다. */
        /* 🔁 2026-09-14 : 할부 두 건(45,000 + 32,000 = 77,000)을 은행 자동이체로 넣으면서 **가진 돈도 77,000 올렸다.**
              할부는 25일이라 그 전엔 「나갈 돈」으로, 그 뒤엔 「지나간 고정」으로 똑같이 빠진다 —
              안 올리면 남는 돈이 89,519 → 12,519 가 되어 하루 417원짜리 예시가 된다. */
        /* 🔴 **다시 잡았다** (2026-09-21). 밥값 기준이 1개월 → 3개월로 바뀌면서
              예시 인물이 「카드까지 막으려면 192,762원 모자라」가 되어 있었다 —
              파는 화면 폰 속에서 **이미 망한 사람**이 되어 있었던 것이다(위 주석의 그 꼴).
           ⛔ 역산 : 90일 동안 나갈 카드·고정지출이 1,051,043원.
              한 끼 1,500원(랜딩 글의 그 숫자)을 띄우려면 하루 몫 6,000원 × 90일 = 540,000원이 남아야 한다.
              1,051,043 + 540,000 = 1,591,043 → 예시 줄이 빼 가는 645,281 을 얹어 2,240,000.
           ⛔ 기간도 1 → 3 개월. 앱 기본값과 같아야 파는 화면과 앱이 같은 말을 한다.
           ⛔ 90일 창은 날마다 조금씩 밀린다 — 한 끼 값도 1,500원 언저리에서 조금씩 움직인다. 그게 맞다. */
        hold: { on: true, goal: 3, have: "2240000", haveAt: 1 },
        titheOn: true,
        theme: "lime"
      };
      const fixed = [
        {
          id: "dfx1",
          name: "\uC0BC\uC131\uC0DD\uBA85 \uD1B5\uD569\uC720\uB2C8\uBC84\uC15C \uC885\uC2E0\uBCF4\uD5D8",
          amt: 119160,
          day: 10,
          kind: "out",
          cat: "\uBCF4\uD5D8",
          pay: "\uC790\uB3D9\uC774\uCCB4",
          type: "ins",
          from: m,
          to: "",
          off: false,
          memo: "15\uB144\uB0A9 \xB7 2030.01.29\uAE4C\uC9C0",
          every: "m",
          mon: 1,
          wd: 0,
          n: 2
        },
        {
          id: "dfx2",
          name: "\uAC74\uAC15\uBCF4\uD5D8\uB8CC",
          amt: 22800,
          day: 10,
          kind: "out",
          cat: "\uBCF4\uD5D8",
          pay: "\uC790\uB3D9\uC774\uCCB4",
          type: "etc",
          from: m,
          to: "",
          off: false,
          memo: "\uB18D\uD611\uC740\uD589 \uC790\uB3D9\uC774\uCCB4",
          every: "m",
          mon: 1,
          wd: 0,
          n: 2
        },
        /* 대출 칸(빌린 돈·이율·만기)까지 채워 둔다 — 파는 화면 「매달 갚고 있는 것」이 이 한 건으로 선다.
           ⛔ 만기는 **이 달에서 일곱 달 뒤**로 둔다. 날짜를 박아 두면 그날이 지나 예시에서 대출이 사라진다. */
        {
          id: "dfx3",
          name: "\uC0BC\uC131 \uBAA8\uBC14\uC77C\uB860 \uC774\uC790",
          amt: 11021,
          day: 13,
          kind: "out",
          cat: "\uB300\uCD9C\uC774\uC790",
          pay: "\uC790\uB3D9\uC774\uCCB4",
          type: "loan",
          from: m,
          to: shiftM(m, 7),
          off: false,
          memo: "\uB300\uCD9C 300\uB9CC\uC6D0 \xB7 \uC5F0 6.7%",
          every: "m",
          mon: 1,
          wd: 0,
          n: 2,
          loan: { principal: 3e6, rate: 6.7, start: shiftM(m, -17) + "-19", end: shiftM(m, 7) + "-19", way: "int" }
        },
        /* 할부 두 건 — 끝나는 달이 서로 달라야 「숨통 트이는 달」이 계단으로 보인다.
           ⛔ from 을 이 달로 둔다. 지난 달에서 시작하면 지난 달 장부에 저절로 적혀 지난달 결산이 흔들린다.
           ⛔ 은행 자동이체다. 카드로 두면 청구서 달이 넘나들며 카드 폭탄 숫자가 달마다 흔들린다. */
        {
          id: "dfx7",
          name: "\uB178\uD2B8\uBD81 \uD560\uBD80",
          amt: 45e3,
          day: 25,
          kind: "out",
          cat: "\uD560\uBD80",
          pay: "\uC790\uB3D9\uC774\uCCB4",
          type: "inst",
          from: m,
          to: shiftM(m, 5),
          off: false,
          memo: "",
          every: "m",
          mon: 1,
          wd: 0,
          n: 2,
          inst: { total: 27e4, months: 6, rate: 0, first: 0 }
        },
        {
          id: "dfx8",
          name: "\uB0C9\uC7A5\uACE0 \uBD84\uD560\uB0A9\uBD80",
          amt: 32e3,
          day: 25,
          kind: "out",
          cat: "\uD560\uBD80",
          pay: "\uC790\uB3D9\uC774\uCCB4",
          type: "inst",
          from: m,
          to: shiftM(m, 2),
          off: false,
          memo: "",
          every: "m",
          mon: 1,
          wd: 0,
          n: 2,
          inst: { total: 96e3, months: 3, rate: 0, first: 0 }
        },
        {
          id: "dfx4",
          name: "LG U+ \uC54C\uB730\uD3F0 \uD1B5\uC2E0\uBE44",
          amt: 12300,
          day: 15,
          kind: "out",
          cat: "\uD1B5\uC2E0\uBE44",
          pay: "\uC790\uB3D9\uC774\uCCB4",
          type: "tel",
          from: m,
          to: "",
          off: false,
          memo: "",
          every: "m",
          mon: 1,
          wd: 0,
          n: 2
        },
        {
          id: "dfx5",
          name: "\uB137\uD50C\uB9AD\uC2A4",
          amt: 7e3,
          day: 21,
          kind: "out",
          cat: "\uAD6C\uB3C5",
          pay: "\uCE74\uB4DC",
          type: "sub",
          from: m,
          to: "",
          off: false,
          memo: "",
          every: "m",
          mon: 1,
          wd: 0,
          n: 2
        },
        {
          id: "dfx6",
          name: "\uC8FC\uC815\uD5CC\uAE08",
          amt: 1e4,
          day: 7,
          kind: "out",
          cat: "\uC77C\uBC18\uD5CC\uAE08",
          pay: "\uACC4\uC88C\uC774\uCCB4",
          type: "give",
          from: m,
          to: "",
          off: false,
          memo: "\uC8FC\uC77C\uB9C8\uB2E4 10,000",
          every: "w",
          mon: 1,
          wd: 0,
          n: 2
        }
      ];
      const tx = [
        t(2, "in", 185e4, "\uB9E4\uCD9C", "\uACC4\uC88C\uC774\uCCB4", "\uC774\uBC88 \uB2EC \uC791\uC5C5\uBE44"),
        t(3, "out", 4500, "\uCE74\uD398\xB7\uAC04\uC2DD", "\uCE74\uB4DC", "\uD3B8\uC758\uC810"),
        /* ⛔ 분류를 **「십일조」**로 둔다 — 앱은 분류가 「십일조」인 줄만 낸 십일조로 센다(십일조 내역 「N월에 낸 것」).
           「일반헌금」으로 두었더니 예시에서 낸 십일조가 하나도 없는 것처럼 보였다. */
        t(3, "out", 185e3, "\uC2ED\uC77C\uC870", "\uACC4\uC88C\uC774\uCCB4", "\uC2ED\uC77C\uC870"),
        t(4, "out", 12800, "\uC2DD\uBE44", "\uCE74\uB4DC", "\uC810\uC2EC"),
        t(6, "out", 38900, "\uB9C8\uD2B8\xB7\uC0DD\uD544\uD488", "\uCE74\uB4DC", "\uC7A5\uBCF4\uAE30"),
        t(8, "out", 1450, "\uAD50\uD1B5\uBE44", "\uCCB4\uD06C\uCE74\uB4DC", "\uC9C0\uD558\uCCA0"),
        t(9, "mv", 3e5, "\uC800\uCD95", "\uACC4\uC88C\uC774\uCCB4", "\uC801\uAE08"),
        t(11, "out", 19800, "\uAD6C\uB3C5", "\uCE74\uB4DC", "\uCEA1\uCEF7 \uD504\uB85C"),
        t(12, "out", 8900, "\uC2DD\uBE44", "\uCE74\uB4DC", "\uAE40\uBC25"),
        t(14, "mv", 1e5, "\uD22C\uC790", "\uACC4\uC88C\uC774\uCCB4", "ETF"),
        t(16, "out", 45e3, "\uBBF8\uC6A9", "\uCE74\uB4DC", "\uBA38\uB9AC"),
        t(18, "out", 3200, "\uCE74\uD398\xB7\uAC04\uC2DD", "\uD604\uAE08", "\uCEE4\uD53C"),
        t(20, "out", 27400, "\uBCD1\uC6D0\xB7\uC57D", "\uCE74\uB4DC", "\uCE58\uACFC"),
        t(23, "in", 5e4, "\uC6A9\uB3C8", "\uACC4\uC88C\uC774\uCCB4", "\uC5C4\uB9C8"),
        t(24, "out", 15900, "\uC637", "\uCE74\uB4DC", "\uC591\uB9D0\uC774\uB791 \uD2F0\uC154\uCE20")
      ].filter((x) => Number(x.d.slice(8, 10)) <= \uB05D);
      const \uC9C0\uB09C\uB2EC = shiftM(m, -1);
      let \uBC882 = 0;
      const t2 = (d, amt, cat, memo) => ({
        id: "demop" + ++\uBC882,
        d: \uC9C0\uB09C\uB2EC + "-" + String(d).padStart(2, "0"),
        k: "out",
        amt,
        cat,
        pay: "\uCE74\uB4DC",
        memo,
        ts: 0,
        st: ""
      });
      const \uC9C0\uB09Ctx = [
        t2(3, 68400, "\uB9C8\uD2B8\xB7\uC0DD\uD544\uD488", "\uC7A5\uBCF4\uAE30"),
        t2(6, 12800, "\uC2DD\uBE44", "\uC810\uC2EC"),
        t2(8, 89e3, "\uC637", "\uAC00\uC744 \uC637"),
        t2(11, 19800, "\uAD6C\uB3C5", "\uCEA1\uCEF7 \uD504\uB85C"),
        t2(13, 5600, "\uCE74\uD398\xB7\uAC04\uC2DD", "\uCEE4\uD53C"),
        t2(15, 43e3, "\uBCD1\uC6D0\xB7\uC57D", "\uCE58\uACFC"),
        t2(18, 52300, "\uB9C8\uD2B8\xB7\uC0DD\uD544\uD488", "\uC7A5\uBCF4\uAE30"),
        t2(20, 15400, "\uC2DD\uBE44", "\uC800\uB141"),
        t2(22, 45e3, "\uBBF8\uC6A9", "\uBA38\uB9AC"),
        t2(24, 98700, "\uC637", "\uC6B4\uB3D9\uD654")
      ];
      await mset([
        [K.cfg, cfg],
        [K.fixed, fixed],
        [K.rev, 1],
        [K.tx(\uC9C0\uB09C\uB2EC), \uC9C0\uB09Ctx.sort(byDate)],
        [K.sum(\uC9C0\uB09C\uB2EC), tally(\uC9C0\uB09Ctx)],
        [K.tx(m), tx.sort(byDate)],
        [K.sum(m), tally(tx)],
        [K.months, [\uC9C0\uB09C\uB2EC, m]],
        [K.checks, [
          { id: "dck1", t: "\uC548 \uC4F0\uB294 \uAD6C\uB3C5 \uB04A\uAE30", d: "" },
          { id: "dck2", t: "\uCE74\uB4DC \uBA85\uC138\uC11C \uD655\uC778", d: today10() }
        ]],
        [K.mat(m), { ids: [], rev: 0 }]
      ]);
      await set(DEMO_SEED, \uD45C);
      return true;
    } catch (e) {
      return false;
    }
  }
  var activeAt = (fixed, m) => fixed.filter((f) => !f.off && !f.irr && (!f.from || m >= f.from) && (!f.to || m <= f.to) && m >= \uB300\uCD9C\uCCAB\uB2EC(f) && hitsMonth(m, f));
  function \uB300\uCD9C\uCCAB\uB2EC(f) {
    if (!f || f.type !== "loan") return "";
    const s = String((f.loan || {}).start || "");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return "";
    return shiftM(s.slice(0, 7), 1);
  }
  var monthNo = (m) => Number(m.slice(0, 4)) * 12 + Number(m.slice(5, 7)) - 1;
  var stepOf = (f) => f.every === "y" ? 12 : f.every === "n" ? Math.min(Math.max(Number(f.n) || 1, 1), 60) : 1;
  function hitsMonth(m, f) {
    if (f.every === "y") return Number(m.slice(5, 7)) === (Number(f.mon) || 1);
    if (f.every === "n") {
      const n = stepOf(f);
      if (n <= 1) return true;
      if (!isMonth(f.from)) return true;
      return ((monthNo(m) - monthNo(f.from)) % n + n) % n === 0;
    }
    return true;
  }
  function \uBA48\uCDA4\uBE7C\uAE30(f, ds) {
    const ps = Array.isArray(f && f.pauses) ? f.pauses : [];
    if (!ps.length) return ds;
    return ds.filter((d) => !ps.some((p) => p && p.from && p.to && d >= p.from && d <= p.to));
  }
  var \uB0A0\uBAA8\uC591ISO = /^\d{4}-\d{2}-\d{2}$/;
  var \uBA48\uCD98\uAE30\uAC04 = (v) => (Array.isArray(v) ? v : []).filter((p) => p && \uB0A0\uBAA8\uC591ISO.test(String(p.from || "")) && \uB0A0\uBAA8\uC591ISO.test(String(p.to || "")) && p.from <= p.to).slice(-24).map((p) => ({ from: p.from, to: p.to }));
  function duesIn(m, f, \uBA48\uCDA4\uBB34\uC2DC) {
    if (!hitsMonth(m, f)) return [];
    if (f.every !== "w") return \uBA48\uCDA4\uBB34\uC2DC ? [dayOf(m, f.day)] : \uBA48\uCDA4\uBE7C\uAE30(f, [dayOf(m, f.day)]);
    const [y, mo] = m.split("-").map(Number);
    const wd = Math.min(Math.max(Number(f.wd) || 0, 0), 6);
    const last = new Date(Date.UTC(y, mo, 0)).getUTCDate();
    const out = [];
    for (let d = 1; d <= last; d++) {
      if (new Date(Date.UTC(y, mo - 1, d)).getUTCDay() === wd) out.push(m + "-" + String(d).padStart(2, "0"));
    }
    return \uBA48\uCDA4\uBB34\uC2DC ? out : \uBA48\uCDA4\uBE7C\uAE30(f, out);
  }
  var matKey = (f, d) => f.every === "w" ? f.id + "@" + d : f.id;
  var \uC2ED\uC77C\uC870\uB791\uAC19\uC774 = (f, \uCF2C) => !!\uCF2C && !!f && !f.off && f.kind !== "in" && f.every === "w" && (f.withTithe === true || f.withTithe !== false && (f.type === "give" || /헌금/.test(f.name || "")));
  function weekKey(iso) {
    const dt = /* @__PURE__ */ new Date(iso + "T00:00:00Z");
    dt.setUTCDate(dt.getUTCDate() - dt.getUTCDay());
    return dt.toISOString().slice(0, 10);
  }
  var instDue = (total, n, rate, k) => {
    const \uC6D4\uC6D0\uAE08 = total / n;
    return Math.round(\uC6D4\uC6D0\uAE08 + (total - \uC6D4\uC6D0\uAE08 * (k - 1)) * (rate / 100 / 12));
  };
  function amtFor(m, f) {
    const base = money(f.amt);
    const i = f && f.inst;
    if (!i) return base;
    if (f.every && f.every !== "m") return base;
    const n = Math.floor(Number(i.months) || 0);
    const total = money(i.total);
    const rate = Number(i.rate) || 0;
    const first = money(i.first);
    if (n < 2 || total <= 0 || !isMonth(f.from)) return base;
    const k = monthNo(m) - monthNo(f.from) + 1;
    if (k < 1 || k > n) return base;
    if (k === 1 && first > 0) return first;
    if (!(rate > 0)) return base;
    return instDue(total, n, rate, k);
  }
  var amtIn = (m, f) => amtFor(m, f) * duesIn(m, f).length;
  var amtIn\uC6D0\uB798 = (m, f) => amtFor(m, f) * duesIn(m, f, true).length;
  var DEDUPE_VER = 2;
  async function catchUp(K, fixedRaw, revRaw, \uC2ED\uC77C\uC870\uCF2C, \uC801\uC740\uB2EC) {
    let fixed = fixedRaw || [];
    const \uBC00\uAC83 = fixed.filter((f) => {
      const \uCCAB = \uB300\uCD9C\uCCAB\uB2EC(f);
      return \uCCAB && \uCCAB > String(f.from || "");
    });
    if (\uBC00\uAC83.length) {
      fixed = fixed.map((f) => \uBC00\uAC83.includes(f) ? Object.assign({}, f, { from: \uB300\uCD9C\uCCAB\uB2EC(f) }) : f);
      await set(K.fixed, fixed);
    }
    const live = fixed.filter((f) => !f.off);
    if (!live.length) return fixed;
    const cur = curMonth();
    let start = cur;
    live.forEach((f) => {
      if (isMonth(f.from) && f.from < start) start = f.from;
    });
    const list = monthRange(start, cur);
    const rev = Number(revRaw || 0);
    const mats = await mget(list.map(K.mat));
    const due = today10();
    for (let i = 0; i < list.length; i++) {
      const mt = mats[i];
      if (mt && Number(mt.rev) === rev && Number(mt.dd) === DEDUPE_VER) {
        const ids = Array.isArray(mt.ids) ? mt.ids : [];
        const owed = [];
        activeAt(fixed, list[i]).forEach((f) => duesIn(list[i], f).forEach((d) => {
          if (d < due || d === due && !\uC2ED\uC77C\uC870\uB791\uAC19\uC774(f, \uC2ED\uC77C\uC870\uCF2C)) owed.push(matKey(f, d));
        }));
        if (owed.every((k) => ids.includes(k))) continue;
      }
      await materialize(K, list[i], fixed, rev, mt, \uC2ED\uC77C\uC870\uCF2C);
      if (\uC801\uC740\uB2EC) \uC801\uC740\uB2EC.add(list[i]);
    }
    return fixed;
  }
  function \uACB9\uCE5C\uC790\uB3D9\uC904\uBE7C\uAE30(tx) {
    const \uBCF8\uAC83 = /* @__PURE__ */ new Set();
    const out = [];
    let \uBE80\uC218 = 0;
    for (const t of tx || []) {
      if (!t || !t.fx) {
        out.push(t);
        continue;
      }
      const key = t.fx + "@" + t.d;
      if (\uBCF8\uAC83.has(key)) {
        \uBE80\uC218++;
        continue;
      }
      \uBCF8\uAC83.add(key);
      out.push(t);
    }
    return { tx: out, \uBE80\uC218 };
  }
  async function \uC801\uD78C\uC904\uB530\uB77C\uACE0\uCE58\uAE30(K, \uC61B, \uC0C8) {
    const cur = curMonth();
    const [cy, cmo] = cur.split("-").map(Number);
    const prev = new Date(Date.UTC(cy, cmo - 2, 1)).toISOString().slice(0, 7);
    const [months, cfg] = await Promise.all([get(K.months), getCfg(K)]);
    const \uB2EC\uB4E4 = (Array.isArray(months) ? months : []).filter((mm) => mm >= prev);
    if (!\uB2EC\uB4E4.length) return;
    const \uCE74\uB4DC\uB4E4 = Array.isArray(cfg.cards) ? cfg.cards : [];
    const \uC548\uB2EB\uD798 = (t, mm) => {
      if (mm >= cur) return true;
      const c = \uCE74\uB4DC\uB4E4.find((x) => \uCE74\uB4DC\uC774\uB984\uB4E4(x).indexOf(String(t.pay || "").trim()) >= 0);
      return !!(c && Number(c.close) > 0 && Number(t.d.slice(8, 10)) > Number(c.close));
    };
    const \uC61B\uC774\uB984 = clean(\uC61B.name, 40);
    const \uC61B\uBD84\uB958 = \uC61B.cat || (\uC61B.kind === "in" ? "\uC785\uAE08" : "\uACE0\uC815\uC9C0\uCD9C");
    const \uC0C8\uBD84\uB958 = \uC0C8.cat || (\uC0C8.kind === "in" ? "\uC785\uAE08" : "\uACE0\uC815\uC9C0\uCD9C");
    const lists = await mget(\uB2EC\uB4E4.map(K.tx));
    for (let i = 0; i < \uB2EC\uB4E4.length; i++) {
      const mm = \uB2EC\uB4E4[i];
      let \uBC14\uB01C = false;
      const out = (lists[i] || []).map((t) => {
        if (!t || t.fx !== \uC0C8.id || !isDate(t.d) || !\uC548\uB2EB\uD798(t, mm)) return t;
        const y = Object.assign({}, t, { amt: amtFor(mm, \uC0C8) });
        if (t.memo === \uC61B\uC774\uB984) y.memo = clean(\uC0C8.name, 40);
        if (t.cat === \uC61B\uBD84\uB958) y.cat = \uC0C8\uBD84\uB958;
        if ((t.pay || "") === (\uC61B.pay || "")) y.pay = \uC0C8.pay || "";
        if (y.amt !== t.amt || y.memo !== t.memo || y.cat !== t.cat || y.pay !== t.pay) \uBC14\uB01C = true;
        return y;
      });
      if (\uBC14\uB01C) await saveMonth(K, mm, out);
    }
  }
  function \uC774\uB978\uB300\uCD9C\uC904\uB4E4(fixed, m) {
    return new Set((fixed || []).filter((f) => {
      const \uCCAB = \uB300\uCD9C\uCCAB\uB2EC(f);
      return \uCCAB && m < \uCCAB;
    }).map((f) => f.id));
  }
  var \uC774\uB978\uB300\uCD9C\uC904\uBE7C\uAE30 = (tx, \uC774\uB978) => \uC774\uB978.size ? tx.filter((t) => !(t && t.fx && \uC774\uB978.has(t.fx))) : tx;
  var \uC774\uB978\uB300\uCD9C\uD45C\uBE7C\uAE30 = (ids, \uC774\uB978) => \uC774\uB978.size ? ids.filter((k) => !\uC774\uB978.has(String(k).split("@")[0])) : ids;
  async function materialize(K, m, fixed, rev, prevMat, \uC2ED\uC77C\uC870\uCF2C) {
    const \uC774\uB978 = \uC774\uB978\uB300\uCD9C\uC904\uB4E4(fixed, m);
    const ids = \uC774\uB978\uB300\uCD9C\uD45C\uBE7C\uAE30(prevMat && Array.isArray(prevMat.ids) ? prevMat.ids.slice() : [], \uC774\uB978);
    const due = today10();
    const \uC77D\uC740\uAC83 = await get(K.tx(m)) || [];
    const \uC815\uB9AC = \uACB9\uCE5C\uC790\uB3D9\uC904\uBE7C\uAE30(\uC77D\uC740\uAC83);
    const tx = \uC774\uB978\uB300\uCD9C\uC904\uBE7C\uAE30(\uC815\uB9AC.tx, \uC774\uB978);
    let changed = \uC815\uB9AC.\uBE80\uC218 > 0 || tx.length !== \uC815\uB9AC.tx.length;
    for (const f of activeAt(fixed, m)) {
      for (const d of duesIn(m, f)) {
        const key = matKey(f, d);
        if (ids.includes(key)) continue;
        if (d > due) continue;
        if (d === due && \uC2ED\uC77C\uC870\uB791\uAC19\uC774(f, \uC2ED\uC77C\uC870\uCF2C)) continue;
        if (tx.some((t) => t.fx === f.id && t.d === d)) {
          ids.push(key);
          continue;
        }
        if (f.every === "w" && tx.some((t) => t.fx === f.id && weekKey(t.d) === weekKey(d))) {
          ids.push(key);
          continue;
        }
        tx.push({
          // ⛔ 할부는 회차마다 금액이 다르다. 여기서 f.amt 를 그대로 쓰면 장부에 늘 같은 값이 적힌다
          id: newId(),
          d,
          k: f.kind === "in" ? "in" : "out",
          amt: amtFor(m, f),
          cat: f.cat || (f.kind === "in" ? "\uC785\uAE08" : "\uACE0\uC815\uC9C0\uCD9C"),
          pay: f.pay || "",
          memo: clean(f.name, 40),
          fx: f.id,
          ts: Date.now()
        });
        ids.push(key);
        changed = true;
      }
    }
    if (changed) await saveMonth(K, m, tx);
    await set(K.mat(m), { rev, ids, dd: DEDUPE_VER });
  }
  function spentDays(tx, cfg) {
    const skip = new Set((cfg.skipCats || []).map(String));
    const spent = /* @__PURE__ */ new Set();
    (tx || []).forEach((t) => {
      if (t.k !== "out") return;
      if (cfg.skipFixed !== false && t.fx) return;
      if (skip.has(t.cat || "")) return;
      spent.add(t.d);
    });
    return spent;
  }
  function stampWhy(tx, cfg, days) {
    const on = new Set(days || []);
    const skip = new Set((cfg.skipCats || []).map(String));
    const why = {};
    (tx || []).forEach((t) => {
      if (t.k === "in") return;
      const d = Number(String(t.d).slice(8, 10));
      if (!on.has(d)) return;
      const \uAE4C\uB2ED = t.k === "mv" ? t.cat || "\uB098\uAC08 \uB3C8" : cfg.skipFixed !== false && t.fx ? "\uACE0\uC815\uC9C0\uCD9C" : skip.has(t.cat || "") ? t.cat || "" : "";
      if (!\uAE4C\uB2ED) return;
      const box = why[d] = why[d] || { amt: 0, \uAE4C\uB2ED: [] };
      box.amt += t.amt;
      if (!box.\uAE4C\uB2ED.includes(\uAE4C\uB2ED)) box.\uAE4C\uB2ED.push(\uAE4C\uB2ED);
    });
    return Object.keys(why).map((d) => ({ d: Number(d), amt: why[d].amt, why: why[d].\uAE4C\uB2ED })).sort((a, b) => a.d - b.d);
  }
  async function streakOf(K, cfg, todayISO, curTx, months, \uC4F0\uAE30\uC2DC\uC791) {
    const lastOf = (m2) => new Date(Date.UTC(Number(m2.slice(0, 4)), Number(m2.slice(5, 7)), 0)).getUTCDate();
    const back = (m2) => {
      let y = Number(m2.slice(0, 4)), mo = Number(m2.slice(5, 7)) - 1;
      if (mo < 1) {
        mo = 12;
        y--;
      }
      return y + "-" + String(mo).padStart(2, "0");
    };
    const first = (months || []).slice().sort()[0] || "";
    const floor = [cfg.openingMonth || "", first].filter(Boolean).sort().pop() || "0000-00";
    let m = todayISO.slice(0, 7), day = Number(todayISO.slice(8, 10)), tx = curTx, n = 0;
    for (let hop = 0; hop < 8; hop++) {
      const spent = spentDays(tx, cfg);
      for (; day >= 1; day--) {
        const iso0 = m + "-" + String(day).padStart(2, "0");
        if (\uC4F0\uAE30\uC2DC\uC791 && iso0 < \uC4F0\uAE30\uC2DC\uC791) return n;
        if (spent.has(iso0)) return n;
        n++;
      }
      m = back(m);
      if (m < floor) return n;
      day = lastOf(m);
      tx = await get(K.tx(m)) || [];
    }
    return n;
  }
  function noSpendOf(tx, cfg, m, todayISO, months, \uC4F0\uAE30\uC2DC\uC791) {
    const spent = spentDays(tx, cfg);
    const last0 = new Date(Date.UTC(Number(m.slice(0, 4)), Number(m.slice(5, 7)), 0)).getUTCDate();
    const empty = { days: [], count: 0, run: 0, upto: 0, last: last0, today: Number(todayISO.slice(8, 10)) };
    const first = (months || []).slice().sort()[0] || "";
    const floor = [cfg.openingMonth || "", first].filter(Boolean).sort().pop() || "";
    if (floor && m < floor) return empty;
    if (\uC4F0\uAE30\uC2DC\uC791 && m < \uC4F0\uAE30\uC2DC\uC791.slice(0, 7)) return empty;
    if (m < todayISO.slice(0, 7) && !tx.length) return empty;
    let \uCCAB\uB0A0 = \uC4F0\uAE30\uC2DC\uC791 && m === \uC4F0\uAE30\uC2DC\uC791.slice(0, 7) ? Number(\uC4F0\uAE30\uC2DC\uC791.slice(8, 10)) || 1 : 1;
    if (\uCCAB\uB0A0 > 1) (tx || []).forEach((t) => {
      const d0 = String(t && t.d || "");
      if (d0.slice(0, 7) === m) {
        const dd = Number(d0.slice(8, 10));
        if (dd && dd < \uCCAB\uB0A0) \uCCAB\uB0A0 = dd;
      }
    });
    const last = new Date(Date.UTC(Number(m.slice(0, 4)), Number(m.slice(5, 7)), 0)).getUTCDate();
    const upto = m === todayISO.slice(0, 7) ? Number(todayISO.slice(8, 10)) : m < todayISO.slice(0, 7) ? last : 0;
    const days = [];
    for (let d = \uCCAB\uB0A0; d <= upto; d++) {
      const iso = m + "-" + String(d).padStart(2, "0");
      if (!spent.has(iso)) days.push(d);
    }
    let run = 0, best = 0;
    for (let d = \uCCAB\uB0A0; d <= upto; d++) {
      run = days.includes(d) ? run + 1 : 0;
      if (run > best) best = run;
    }
    return {
      days,
      count: days.length,
      run: best,
      upto,
      last,
      today: Number(todayISO.slice(8, 10)),
      // 돈이 나갔는데도 도장이 찍힌 날과 그 까닭
      why: stampWhy(tx, cfg, days)
    };
  }
  var FX_FALLBACK = 1400;
  async function usdRate() {
    const saved = await get(FX_KEY);
    if (saved && saved.at === today10() && saved.rate > 0) return saved;
    try {
      const r = await fetch("https://open.er-api.com/v6/latest/USD", { signal: AbortSignal.timeout(4e3) });
      const j = await r.json();
      const rate = Number(j && j.rates && j.rates.KRW);
      if (rate > 0) {
        const rec = { rate: Math.round(rate * 100) / 100, at: today10(), live: true };
        await set(FX_KEY, rec);
        return rec;
      }
    } catch (e) {
    }
    if (saved && saved.rate > 0) return { rate: saved.rate, at: saved.at, live: false };
    return { rate: FX_FALLBACK, at: "", live: false };
  }
  function shiftM(m, n) {
    let y = Number(m.slice(0, 4)), mo = Number(m.slice(5, 7)) + n;
    while (mo > 12) {
      mo -= 12;
      y++;
    }
    while (mo < 1) {
      mo += 12;
      y--;
    }
    return y + "-" + String(mo).padStart(2, "0");
  }
  function monthGap(a, b) {
    if (!/^\d{4}-\d{2}$/.test(String(a)) || !/^\d{4}-\d{2}$/.test(String(b))) return 0;
    const n = (Number(b.slice(0, 4)) - Number(a.slice(0, 4))) * 12 + (Number(b.slice(5, 7)) - Number(a.slice(5, 7)));
    return Math.max(0, n);
  }
  var HOLD_BACK_MAX = 24;
  function cycleOf(payMonth, card) {
    const close = Math.min(Math.max(Number(card.close) || 26, 1), 28);
    const to = dayOf(shiftM(payMonth, -1), close);
    const fromM = shiftM(payMonth, -2);
    const from = dayOf(fromM, close + 1 > 28 ? 28 : close + 1);
    return { from, to };
  }
  async function cardBills(K, cfg, todayISO, known, fixed, viewM) {
    const cards = Array.isArray(cfg.cards) ? cfg.cards.filter((c) => c && c.name) : [];
    if (!cards.length) return [];
    const bills = known || {};
    const cur = todayISO.slice(0, 7);
    const \uBCFC\uB2EC = /^\d{4}-\d{2}$/.test(String(viewM || "")) ? viewM : cur;
    const fixList = Array.isArray(fixed) ? fixed : [];
    const fxType = {};
    fixList.forEach((f) => {
      fxType[f.id] = f.type || "etc";
    });
    const \uC7B0\uB0A0 = (() => {
      const t = Number((cfg.hold || {}).haveAt) || 0;
      return t ? new Date(t + 9 * 3600 * 1e3).toISOString().slice(0, 10) : "";
    })();
    const \uAC70\uC2AC\uB7EC = \uC7B0\uB0A0 ? Math.min(HOLD_BACK_MAX, Math.max(3, monthGap(\uC7B0\uB0A0.slice(0, 7), cur))) : 3;
    const \uC9C0\uB09C\uACB0\uC81C\uC77C = (payDay) => {
      if (!\uC7B0\uB0A0) return [];
      const out2 = [];
      for (let i = \uAC70\uC2AC\uB7EC; i >= 0; i--) {
        const pm = shiftM(cur, -i);
        const d = dayOf(pm, payDay);
        if (d > \uC7B0\uB0A0 && d < todayISO) out2.push({ m: pm, d });
      }
      return out2;
    };
    const need = /* @__PURE__ */ new Set();
    cards.forEach((c) => {
      const payDay = Math.min(Math.max(Number(c.payday) || 10, 1), 28);
      const nextM = Number(todayISO.slice(8, 10)) <= payDay ? cur : shiftM(cur, 1);
      [nextM, shiftM(nextM, 1), shiftM(\uBCFC\uB2EC, 1)].forEach((pm) => {
        const cy = cycleOf(pm, c);
        need.add(cy.from.slice(0, 7));
        need.add(cy.to.slice(0, 7));
      });
      \uC9C0\uB09C\uACB0\uC81C\uC77C(payDay).forEach((p) => {
        const cy = cycleOf(p.m, c);
        need.add(cy.from.slice(0, 7));
        need.add(cy.to.slice(0, 7));
      });
    });
    const ms = [...need];
    const lists = await mget(ms.map(K.tx));
    const byM = {};
    ms.forEach((m, i) => {
      byM[m] = \uACB9\uCE5C\uC790\uB3D9\uC904\uBE7C\uAE30(lists[i] || []).tx;
    });
    const \uB05D\uB09C\uB0A0 = {};
    fixList.forEach((f) => {
      if (!f.done) return;
      const \uB0A0 = [f.doneAt, f.offAt].find((x) => \uB0A0\uBAA8\uC591ISO.test(String(x || "")));
      \uB05D\uB09C\uB0A0[f.id] = \uB0A0 || "0000-00-00";
    });
    const rowsBetween = (\uC774\uB984\uB4E4, from, to, \uACB0\uC81C\uC77C) => {
      const out2 = [];
      Object.keys(byM).forEach((m) => byM[m].forEach((t) => {
        if (t.k !== "out" || !\uC774\uB984\uB4E4.has(t.pay || "")) return;
        if (t.d < from || t.d > to) return;
        if (t.fx && \uB05D\uB09C\uB0A0[t.fx] && \uACB0\uC81C\uC77C > \uB05D\uB09C\uB0A0[t.fx]) return;
        out2.push({
          d: t.d,
          name: t.memo || t.cat || "\uC9C0\uCD9C",
          amt: t.amt,
          type: t.fx ? fxType[t.fx] || "etc" : "",
          fx: !!t.fx,
          plan: false,
          /* ⛔ **어느 고정지출에서 나온 줄인지**를 같이 보낸다 (2026-09-10).
             할부는 카드 청구서 안에 살아서, 이게 없으면 화면이 「몇 회차인지」를 적을 수도,
             그 줄을 눌러 고칠 수도 없다 — 할부 칸을 만들어도 손이 닿지 않는다.
             ⛔ fx(참/거짓)는 그대로 둔다. 이미 그걸 보고 있는 자리가 있다. */
          fxid: t.fx || ""
        });
      }));
      return out2;
    };
    const planBetween = (\uC774\uB984\uB4E4, from, to) => {
      const out2 = [];
      const ms2 = [.../* @__PURE__ */ new Set([from.slice(0, 7), to.slice(0, 7)])];
      fixList.forEach((f) => {
        if (f.off || f.irr || f.kind === "in") return;
        if (!\uC774\uB984\uB4E4.has(f.pay || "")) return;
        ms2.forEach((m) => {
          if (f.from && m < f.from) return;
          if (f.to && m > f.to) return;
          if (m < \uB300\uCD9C\uCCAB\uB2EC(f)) return;
          duesIn(m, f).forEach((d) => {
            if (d < from || d > to || d <= todayISO) return;
            out2.push({
              d,
              name: f.name,
              amt: amtFor(m, f),
              type: f.type || "etc",
              fx: true,
              plan: true,
              fxid: f.id
            });
          });
        });
      });
      return out2;
    };
    const billOf = (\uC774\uB984\uB4E4, cy, \uACB0\uC81C\uC77C) => {
      const done = rowsBetween(\uC774\uB984\uB4E4, cy.from, cy.to, \uACB0\uC81C\uC77C);
      const plan = planBetween(\uC774\uB984\uB4E4, cy.from, cy.to);
      const items = done.concat(plan).sort((a, b) => a.d < b.d ? -1 : a.d > b.d ? 1 : 0);
      return {
        amt: done.reduce((a, x) => a + x.amt, 0),
        plan: plan.reduce((a, x) => a + x.amt, 0),
        items
      };
    };
    const out = cards.map((c) => {
      const payDay = Math.min(Math.max(Number(c.payday) || 10, 1), 28);
      const nextM = Number(todayISO.slice(8, 10)) <= payDay ? cur : shiftM(cur, 1);
      const afterM = shiftM(nextM, 1);
      const c1 = cycleOf(nextM, c), c2 = cycleOf(afterM, c);
      const nd = dayOf(nextM, payDay);
      const payName = c.pay || c.name;
      const \uC774\uB984\uB4E4 = new Set(\uCE74\uB4DC\uC774\uB984\uB4E4(c));
      const b1 = billOf(\uC774\uB984\uB4E4, c1, nd);
      const said = Number(bills[c.name + "|" + nd]) || 0;
      const ad = dayOf(afterM, payDay);
      const said2 = Number(bills[c.name + "|" + ad]) || 0;
      const b2 = billOf(\uC774\uB984\uB4E4, c2, ad);
      return {
        name: c.name,
        pay: payName,
        pays: [...\uC774\uB984\uB4E4],
        close: Number(c.close) || 26,
        payday: payDay,
        /* 넣어 두신 뒤로 **이미 통장에서 빠져나간** 청구서들 (잔액 셈에만 쓴다).
           ⛔ **장부가 먼저다** (사장님 확인 2026-09-01 : 「내 장부가 맞아」).
              앞서는 손으로 적어 두신 값(said)이 있으면 그것부터 썼다. 그런데 said 는
              마감 전에 한 번 적어 두면 그대로 굳는다 — 9/10 청구서가 그랬다
              (적어 두신 값 282,333 · 장부 17건 612,647). 그대로 두면 9/10 이 지난 뒤
              **잔액이 330,314원 많게** 보인다.
           ⛔ 그런데 said 를 아주 버리지는 않는다. **장부가 텅 빈 옛날 청구서**에는
              카드사 값이라도 있는 편이 0원보다 낫다. 그때만 뒤로 받쳐 준다.
           ⛔ 앱에 이 값을 **지우는 길이 없다** (「청구서 금액 넣기」 줄은 2026-08-26 에 뺐다).
              그래서 데이터를 지우는 대신 **안 쓰는 쪽**으로 고쳤다. */
        passed: \uC9C0\uB09C\uACB0\uC81C\uC77C(payDay).map((p) => {
          const b = billOf(\uC774\uB984\uB4E4, cycleOf(p.m, c), p.d);
          const s2 = Number(bills[c.name + "|" + p.d]) || 0;
          return { d: p.d, amt: b.amt + b.plan || s2 };
        }),
        /* amt  = 이미 장부에 적힌 것 · plan = 아직 안 온 고정지출(할부·구독·자동결제)
           said = 카드사가 알려준 값. 화면에서는 said 가 있으면 그것만, 없으면 amt+plan 을 쓴다. */
        next: {
          d: nd,
          from: c1.from,
          to: c1.to,
          amt: b1.amt,
          plan: b1.plan,
          items: b1.items,
          said,
          gap: said ? said - (b1.amt + b1.plan) : 0
        },
        // 다음다음 달치도 카드사가 미리 알려준 값이 있으면 그걸 쓴다
        after: {
          d: ad,
          from: c2.from,
          to: c2.to,
          amt: b2.amt,
          plan: b2.plan,
          items: b2.items,
          said: said2,
          gap: said2 ? said2 - (b2.amt + b2.plan) : 0
        },
        /* 보고 있는 달에 쓴 것이 빠지는 청구서 — **화면만** 이걸 쓴다 (위 주석).
           7월을 보면 8/10, 10월을 보면 11/10. 지난 달이면 이미 빠져나간 청구서다. */
        /* 보고 있는 달에 **결제일이 오는** 청구서 — 그 달 화면의 「나갈 돈」이 이걸 쓴다
           (사장님 지적 2026-09-09 : 「10월을 눌렀을때 지금하고 같은 돈이 나오면 안되잖아」).
           🔴 view 와 **한 달 어긋난다.** view 는 「그 달에 **쓴** 것이 다음 달에 빠지는 것」,
              due 는 「그 달에 **나가는** 것」이다. 10월 화면에 필요한 건 10/10 청구서다.
           ⛔ 앞서 새 화면은 next(코앞 청구서)를 썼다. 그래서 어느 달을 넘겨 봐도
              9/10 청구서 하나가 그대로 떴다 — 달을 넘겨도 같은 돈이 나오던 까닭이다.
           ⛔ next·after 는 손대지 않는다. 버티기(hold.cardDue)가 그 둘을 쓴다. */
        due: (() => {
          const cy = cycleOf(\uBCFC\uB2EC, c);
          const d = dayOf(\uBCFC\uB2EC, payDay);
          const b = billOf(\uC774\uB984\uB4E4, cy, d);
          return { d, from: cy.from, to: cy.to, amt: b.amt, plan: b.plan, items: b.items };
        })(),
        view: (() => {
          const vm = shiftM(\uBCFC\uB2EC, 1);
          const cy = cycleOf(vm, c);
          const d = dayOf(vm, payDay);
          const b = billOf(\uC774\uB984\uB4E4, cy, d);
          const s = Number(bills[c.name + "|" + d]) || 0;
          return {
            d,
            from: cy.from,
            to: cy.to,
            amt: b.amt,
            plan: b.plan,
            items: b.items,
            said: s,
            gap: s ? s - (b.amt + b.plan) : 0
          };
        })()
      };
    });
    const mine = new Set(cards.flatMap(\uCE74\uB4DC\uC774\uB984\uB4E4));
    const NOW = /체크|직불|선불|debit/i;
    const orphan = {};
    Object.keys(byM).forEach((mm) => (byM[mm] || []).forEach((t) => {
      if (t.k !== "out") return;
      const p = t.pay || "";
      if (!/카드/.test(p) || mine.has(p) || NOW.test(p)) return;
      orphan[p] = (orphan[p] || 0) + t.amt;
    }));
    out.orphan = Object.keys(orphan).map((p) => ({ pay: p, amt: orphan[p] })).sort((a, b) => b.amt - a.amt);
    return out;
  }
  var BIG = 5e4;
  var ASK_CATS = ["\uAC00\uC804\uC81C\uD488", "\uBC18\uB824\uB3D9\uBB3C \uC6A9\uD488", "\uC637", "\uC0AC\uBB34\uC6A9\uD488"];
  function useAsk(tx, fixed, answered) {
    const cand = [];
    tx.filter((t) => t.k === "out" && t.amt >= BIG && !t.fx && ASK_CATS.includes(t.cat || "")).sort((a, b) => b.amt - a.amt).forEach((t) => cand.push({ key: t.id, name: t.memo || t.cat || "\uC9C0\uCD9C", amt: t.amt, d: t.d, kind: "\uC0B0 \uAC83" }));
    const left = cand.filter((c) => !answered[c.key]);
    return { one: left[0] || null, left: left.length };
  }
  async function monthPayload(K, m, \uC4F0\uAE30\uC2DC\uC791\uC77C) {
    const cur = curMonth();
    let [
      txRaw,
      matRaw,
      cfgRaw,
      monthsRaw,
      note,
      bestRaw,
      runRaw,
      logRaw,
      answeredRaw,
      billsRaw,
      fixedRaw,
      fixRevRaw,
      drevRaw,
      checksRaw
    ] = await mget([
      K.tx(m),
      K.mat(m),
      K.cfg,
      K.months,
      K.note(m),
      K.nsBest,
      K.nsRun,
      K.nsLog,
      K.use,
      K.bills,
      K.fixed,
      K.rev,
      K.drev,
      K.checks
    ]);
    const \uC801\uC740\uB2EC = /* @__PURE__ */ new Set();
    const fixed = await catchUp(K, fixedRaw, fixRevRaw, (cfgRaw || {}).titheOn !== false, \uC801\uC740\uB2EC);
    if (\uC801\uC740\uB2EC.has(m)) [txRaw, matRaw] = await mget([K.tx(m), K.mat(m)]);
    const cfg = Object.assign(DEFAULT_CFG(), cfgRaw || {});
    cfg.cats = Object.assign(DEFAULT_CFG().cats, cfgRaw && cfgRaw.cats || {});
    const tx = \uACB9\uCE5C\uC790\uB3D9\uC904\uBE7C\uAE30((txRaw || []).slice()).tx.sort(byDate);
    const sum = tally(tx);
    const months = monthsRaw || [];
    const prev = months.filter((x) => x < m && x >= (cfg.openingMonth || "0000-00"));
    const cardsP = cardBills(K, cfg, today10(), billsRaw || {}, fixed, m);
    const tBack = months.filter((x) => x <= m).slice(-3);
    const back3 = months.filter((x) => x <= cur).slice(-3);
    const holdBack = (() => {
      const t = Number((cfg.hold || {}).haveAt) || 0;
      if (!t) return [];
      const hm = new Date(t + 9 * 3600 * 1e3).toISOString().slice(0, 7);
      const from = shiftM(cur, -Math.min(HOLD_BACK_MAX, monthGap(hm, cur)));
      return months.filter((x) => x >= from && x <= cur);
    })();
    const wantTx = [...new Set(tBack.concat(back3, holdBack, [cur]))].filter((x) => x !== m);
    const [sums, gotTx] = await Promise.all([
      mget(prev.map(K.sum)),
      wantTx.length ? mget(wantTx.map(K.tx)).then((a) => a.map((x) => \uACB9\uCE5C\uC790\uB3D9\uC904\uBE7C\uAE30(x || []).tx)) : Promise.resolve([])
    ]);
    const txCache = { [m]: tx };
    wantTx.forEach((x, i) => {
      txCache[x] = gotTx[i] || [];
    });
    const needFix = prev.filter((x, i) => sums[i] && (sums[i].tithe === void 0 || sums[i].save === void 0 || sums[i].saveA === void 0));
    if (needFix.length) {
      const txs = (await mget(needFix.map(K.tx))).map((x) => \uACB9\uCE5C\uC790\uB3D9\uC904\uBE7C\uAE30(x || []).tx);
      const pairs = [];
      needFix.forEach((mm, i) => {
        const fixed2 = tally(txs[i] || []);
        sums[prev.indexOf(mm)] = fixed2;
        pairs.push([K.sum(mm), fixed2]);
      });
      try {
        await mset(pairs);
      } catch (e) {
      }
    }
    let carry = money(cfg.opening);
    sums.forEach((s) => {
      if (s) carry += (s.in || 0) - (s.out || 0);
    });
    const tAll = [].concat(...tBack.map((x) => txCache[x] || []), tBack.includes(m) ? [] : tx);
    const todayISO = today10();
    const \uBC14\uD0D5\uC544\uB2D8 = (t) => !!(t && t.nt) || /환급|돌려받|빌려|갚/.test(String(t && t.cat || ""));
    const \uC218\uC785\uC904 = (t) => t.k === "in" && !\uBC14\uD0D5\uC544\uB2D8(t);
    const \uB0A0\uB354\uD574 = (iso, n) => new Date(Date.parse(iso + "T00:00:00Z") + n * 864e5).toISOString().slice(0, 10);
    const \uC8FC\uC77C\uB9C8\uAC10 = (iso) => Date.parse(iso + "T06:50:00Z") - 9 * 36e5;
    const dow = (/* @__PURE__ */ new Date(todayISO + "T00:00:00Z")).getUTCDay();
    const nextSun = \uB0A0\uB354\uD574(todayISO, (7 - dow) % 7);
    const weekFrom = \uB0A0\uB354\uD574(nextSun, -6);
    const \uC9C0\uB09C\uC8FC\uC77C = \uB0A0\uB354\uD574(weekFrom, -1);
    const \uB0A0\uC815\uC624 = (iso) => Date.parse(iso + "T12:00:00Z") - 9 * 36e5;
    const \uC7B0\uC2DC\uAC01 = (t) => t.d === \uC9C0\uB09C\uC8FC\uC77C || t.d === nextSun ? t.ts || \uB0A0\uC815\uC624(t.d) : \uB0A0\uC815\uC624(t.d);
    const \uC2ED\uC77C\uC870\uC904 = (t) => t.k === "out" && t.cat === "\uC2ED\uC77C\uC870";
    const \uD55C\uAD6D\uB0A0 = (ms) => new Date(ms + 9 * 36e5).toISOString().slice(0, 10);
    const \uBBF8\uB9AC\uC801\uC74C = (t) => !!t.ts && \uD55C\uAD6D\uB0A0(t.ts) < t.d;
    const \uC544\uC9C1\uC57D\uC18D = (t) => t.d >= todayISO && t.d <= nextSun && \uBBF8\uB9AC\uC801\uC74C(t);
    const \uB0B8\uC2DC\uAC01 = (t) => t.ts && \uD55C\uAD6D\uB0A0(t.ts) > t.d && (t.d === \uC9C0\uB09C\uC8FC\uC77C || t.d === nextSun) ? \uC8FC\uC77C\uB9C8\uAC10(t.d) : \uC7B0\uC2DC\uAC01(t);
    const \uB9C8\uC9C0\uB9C9\uB0A9\uBD80 = tAll.reduce((a, t) => \uC2ED\uC77C\uC870\uC904(t) && t.d <= todayISO && !\uC544\uC9C1\uC57D\uC18D(t) ? Math.max(a, \uB0B8\uC2DC\uAC01(t)) : a, 0);
    const \uC2DC\uC791 = Math.max(\uC8FC\uC77C\uB9C8\uAC10(\uC9C0\uB09C\uC8FC\uC77C), \uB9C8\uC9C0\uB9C9\uB0A9\uBD80);
    const \uB05D = \uC8FC\uC77C\uB9C8\uAC10(nextSun);
    const \uC774\uBC88\uBAAB = tAll.filter((t) => \uC218\uC785\uC904(t) && \uC7B0\uC2DC\uAC01(t) > \uC2DC\uC791 && \uC7B0\uC2DC\uAC01(t) <= \uB05D);
    const weekIncome = \uC774\uBC88\uBAAB.reduce((a, t) => a + t.amt, 0);
    const \uC904\uB85C = (list) => list.slice().sort((a, b) => a.d < b.d ? 1 : a.d > b.d ? -1 : 0).slice(0, 10).map((t) => ({ id: t.id || "", d: t.d, amt: t.amt, cat: t.cat || "", memo: t.memo || "" }));
    const \uBAAB\uC904 = \uC904\uB85C(\uC774\uBC88\uBAAB);
    const \uB0B8\uBAAB = \uB9C8\uC9C0\uB9C9\uB0A9\uBD80 > \uC8FC\uC77C\uB9C8\uAC10(\uC9C0\uB09C\uC8FC\uC77C) ? tAll.filter((t) => \uC218\uC785\uC904(t) && \uC7B0\uC2DC\uAC01(t) > \uC8FC\uC77C\uB9C8\uAC10(\uC9C0\uB09C\uC8FC\uC77C) && \uC7B0\uC2DC\uAC01(t) <= \uB9C8\uC9C0\uB9C9\uB0A9\uBD80) : [];
    const \uB0B8\uBAAB\uC904 = \uC904\uB85C(\uB0B8\uBAAB);
    const \uB2E4\uC74C\uBAAB = tAll.filter((t) => \uC218\uC785\uC904(t) && \uC7B0\uC2DC\uAC01(t) > Math.max(\uB05D, \uB9C8\uC9C0\uB9C9\uB0A9\uBD80));
    const \uB2E4\uC74C\uBAAB\uC904 = \uC904\uB85C(\uB2E4\uC74C\uBAAB);
    const \uC8FC\uC77C\uC774\uB0D0 = (iso) => (/* @__PURE__ */ new Date(iso + "T00:00:00Z")).getUTCDay() === 0;
    const \uC61B\uC7B0 = (t) => \uC8FC\uC77C\uC774\uB0D0(t.d) && t.ts && \uD55C\uAD6D\uB0A0(t.ts) <= \uB0A0\uB354\uD574(t.d, 7) ? t.ts : \uB0A0\uC815\uC624(t.d);
    const \uC61B\uB0B8 = (t) => t.d > todayISO || \uC544\uC9C1\uC57D\uC18D(t) ? \uC8FC\uC77C\uB9C8\uAC10(t.d) : \uC8FC\uC77C\uC774\uB0D0(t.d) && t.ts && \uD55C\uAD6D\uB0A0(t.ts) !== t.d ? \uC8FC\uC77C\uB9C8\uAC10(t.d) : \uC61B\uC7B0(t);
    const \uB0B8\uC904\uB4E4 = tAll.filter(\uC2ED\uC77C\uC870\uC904).map((t) => ({ t, \uB05D: \uC61B\uB0B8(t) })).sort((x, y) => x.\uB05D - y.\uB05D);
    const \uB0B8\uBC14\uD0D5 = \uB0B8\uC904\uB4E4.map((x, i) => {
      const \uBD80\uD130 = Math.max(
        \uC8FC\uC77C\uB9C8\uAC10(\uB0A0\uB354\uD574(x.t.d, -((/* @__PURE__ */ new Date(x.t.d + "T00:00:00Z")).getUTCDay() || 7))),
        i ? \uB0B8\uC904\uB4E4[i - 1].\uB05D : 0
      );
      const \uB3C8 = tAll.filter((u) => \uC218\uC785\uC904(u) && \uC61B\uC7B0(u) > \uBD80\uD130 && \uC61B\uC7B0(u) <= x.\uB05D);
      return { t: x.t, \uB3C8 };
    }).filter((x) => String(x.t.d).slice(0, 7) === m && x.\uB3C8.length).map((x) => ({
      id: x.t.id || "",
      d: x.t.d,
      amt: x.t.amt,
      since: x.\uB3C8.reduce((a2, u) => a2 + u.amt, 0),
      rows: \uC904\uB85C(x.\uB3C8)
    }));
    const \uB0B8\uBAAB\uD569 = \uB0B8\uBAAB.reduce((a2, t) => a2 + t.amt, 0);
    const \uC801\uC5B4\uB454\uAC83 = tAll.reduce((a, t) => a + (\uC2ED\uC77C\uC870\uC904(t) && (t.d > todayISO && t.d <= nextSun || \uC544\uC9C1\uC57D\uC18D(t)) ? t.amt : 0), 0);
    const \uB0BC\uB2EC = nextSun.slice(0, 7);
    const \uD5CC\uAE08\uCF2C = cfg.titheOn !== false && fixed.some((f) => \uC2ED\uC77C\uC870\uB791\uAC19\uC774(f, true));
    const \uB0BC\uB2EC\uC904 = !\uD5CC\uAE08\uCF2C ? [] : txCache[\uB0BC\uB2EC] || \uACB9\uCE5C\uC790\uB3D9\uC904\uBE7C\uAE30(await get(K.tx(\uB0BC\uB2EC)) || []).tx;
    const \uB0BC\uB2EC\uD45C = !\uD5CC\uAE08\uCF2C ? [] : \uB0BC\uB2EC === m ? matRaw && matRaw.ids || [] : (await get(K.mat(\uB0BC\uB2EC)) || {}).ids || [];
    const \uD5CC\uAE08\uAC19\uC774 = !\uD5CC\uAE08\uCF2C ? [] : fixed.filter((f) => \uC2ED\uC77C\uC870\uB791\uAC19\uC774(f, true) && activeAt([f], \uB0BC\uB2EC).length && duesIn(\uB0BC\uB2EC, f).includes(nextSun) && !\uB0BC\uB2EC\uD45C.includes(matKey(f, nextSun)) && !\uB0BC\uB2EC\uC904.some((t) => t.fx === f.id && t.d === nextSun) && !tAll.some((t) => t.fx === f.id && t.d === nextSun)).map((f) => ({
      id: f.id,
      name: f.name,
      amt: amtFor(nextSun.slice(0, 7), f),
      cat: f.cat || "\uACE0\uC815\uC9C0\uCD9C",
      pay: f.pay || ""
    }));
    const tithe = {
      weekFrom,
      // 이번 주 시작(일요일)
      payOn: nextSun,
      // 낼 날(다가오는 일요일)
      since: weekIncome,
      // 이번 주에 들어온 돈
      rows: \uBAAB\uC904,
      // 그 돈의 내역 (적기 전에도 확인하시라고)
      paidRows: \uB0B8\uBAAB\uC904,
      // 방금 내신 몫이 나온 곳 (낸 뒤에도 보시라고)
      paidSince: \uB0B8\uBAAB\uD569,
      // 그 바탕이 된 돈 전부
      nextRows: \uB2E4\uC74C\uBAAB\uC904,
      // 6:50 뒤에 들어와 다음 주일로 넘어간 돈
      nextSince: \uB2E4\uC74C\uBAAB.reduce((a2, t) => a2 + t.amt, 0),
      nextOn: \uB0A0\uB354\uD574(nextSun, 7),
      // 그 돈을 낼 날
      paidBy: \uB0B8\uBC14\uD0D5,
      // 이 달에 낸 십일조마다 그 바탕이 된 돈 (2026-09-15)
      offer: \uD5CC\uAE08\uAC19\uC774,
      // 십일조 적을 때 같이 적을 헌금(주정헌금)
      left: Math.floor(weekIncome / 10),
      // 이번에 내실 것
      planned: \uC801\uC5B4\uB454\uAC83,
      // 그 주일 자로 이미 적어 두신 것
      /* ⛔ **내신 뒤에 「들어온 돈이 0원」이라 말하지 않는다** (2026-08-16 검사 중에 잡음).
         내시면 시작이 그 시각으로 옮겨가 창이 비어 weekIncome 이 0 이 된다. 그런데 화면은
         「8월 10일~8월 16일에 들어온 돈이 0원이에요」라고 적었다 — 그 주에 60,800원이
         들어왔고 방금 그걸로 내셨는데 **없는 일을 지어낸 말**이다.
         (예전엔 주일 6:50 에 창이 다음 주로 넘어가 「8월 17일~8월 23일」이라 참말이었다.
          주일 하루를 남기기로 하면서 이 말이 거짓이 됐다 — 같이 고쳐야 하는 짝이다)
         ⛔ 들어온 것이 0 일 때만 채운다. 새로 들어온 돈이 있으면 그건 다음 몫이라
            「내셨어요」가 아니라 「낼 것」을 말해야 한다. */
      paidAt: weekIncome === 0 && \uB9C8\uC9C0\uB9C9\uB0A9\uBD80 > \uC8FC\uC77C\uB9C8\uAC10(\uC9C0\uB09C\uC8FC\uC77C) ? \uD55C\uAD6D\uB0A0(\uB9C8\uC9C0\uB9C9\uB0A9\uBD80) : "",
      monthIncome: sum.in,
      monthPaid: sum.tithe || 0
    };
    const matIds = matRaw && matRaw.ids || [];
    const live = activeAt(fixed, m);
    const upcoming = [];
    if (m >= cur) {
      for (const f of live) {
        for (const d of duesIn(m, f)) {
          if (matIds.includes(matKey(f, d))) continue;
          if (tx.some((t) => t.fx === f.id && t.d === d)) continue;
          upcoming.push({
            id: f.id,
            key: matKey(f, d),
            name: f.name,
            amt: amtFor(m, f),
            /* 비고 — 「2028-07까지」·「연 4.2%」처럼 한 줄로 적어 두신 것.
               ⛔ 안 실어 보내면 새 화면에서 그 줄이 통째로 사라진다. 옛 화면은 목록에 같이 적었다
                  (사장님 지적 2026-09-09 : 「대출같은경우 비고란에 언제까지 이런게 적혀있었다면
                   지금도 노출되어야해」). */
            memo: f.memo || "",
            kind: f.kind === "in" ? "in" : "out",
            d,
            cat: f.cat || "",
            once: !!f.once,
            /* 화면에서 「저절로 빠져요 / 직접 보내셔야 해요」를 가르는 데 쓴다
               (사장님 지시 2026-08-04). type 은 할부·구독 꼬리표를 붙이는 데 쓴다. */
            pay: f.pay || "",
            type: f.type || "etc"
          });
        }
      }
      upcoming.sort((a, b) => a.d < b.d ? -1 : 1);
    }
    const \uBAA8\uC740\uB2EC\uB9C8\uB2E4 = (() => {
      const \uAC12 = {};
      prev.forEach((x, i) => {
        if (sums[i]) \uAC12[x] = sums[i];
      });
      \uAC12[m] = sum;
      const \uCCAB = cfg.openingMonth && isMonth(cfg.openingMonth) ? cfg.openingMonth < m ? cfg.openingMonth : m : m;
      const \uB05D2 = new Date(Date.UTC(Number(m.slice(0, 4)), Number(m.slice(5, 7)) - 1, 1));
      const \uC2DC\uC7912 = new Date(Date.UTC(Number(\uCCAB.slice(0, 4)), Number(\uCCAB.slice(5, 7)) - 1, 1));
      const \uB2EC\uC218 = Math.max(
        12,
        (\uB05D2.getUTCFullYear() - \uC2DC\uC7912.getUTCFullYear()) * 12 + (\uB05D2.getUTCMonth() - \uC2DC\uC7912.getUTCMonth()) + 1
      );
      const \uC904 = [];
      for (let i = \uB2EC\uC218 - 1; i >= 0; i--) {
        const d = new Date(Date.UTC(\uB05D2.getUTCFullYear(), \uB05D2.getUTCMonth() - i, 1));
        const mm = d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0");
        const v = \uAC12[mm] || {};
        \uC904.push({ m: mm, v: v.save || 0, a: v.saveA || 0, b: v.saveB || 0 });
      }
      return \uC904;
    })();
    const \uBAA8\uC740\uB204\uC801 = \uBAA8\uC740\uB2EC\uB9C8\uB2E4.reduce((a, x) => ({
      \uD569: a.\uD569 + x.v,
      \uC800\uCD95: a.\uC800\uCD95 + x.a,
      \uD22C\uC790: a.\uD22C\uC790 + x.b
    }), { \uD569: 0, \uC800\uCD95: 0, \uD22C\uC790: 0 });
    const \uCCAB\uB2EC0 = (months || []).slice().sort()[0] || "";
    const \uC4F0\uAE30\uC2DC\uC791 = /^\d{4}-\d{2}-\d{2}$/.test(String(\uC4F0\uAE30\uC2DC\uC791\uC77C || "")) && (!\uCCAB\uB2EC0 || \uCCAB\uB2EC0 >= \uC4F0\uAE30\uC2DC\uC791\uC77C.slice(0, 7)) ? \uC4F0\uAE30\uC2DC\uC791\uC77C : "";
    const ns = noSpendOf(tx, cfg, m, today10(), months, \uC4F0\uAE30\uC2DC\uC791);
    const nsPut = [];
    let best = bestRaw && bestRaw.days ? bestRaw : { days: 0, m: "" };
    if (ns.count > best.days || best.m === m && ns.count !== best.days) {
      best = { days: ns.count, m };
      nsPut.push([K.nsBest, best]);
    }
    ns.best = best;
    ns.streak = await streakOf(K, cfg, today10(), txCache[cur] || [], months, \uC4F0\uAE30\uC2DC\uC791);
    let runBest = runRaw && runRaw.days || 0;
    if (ns.streak > runBest) runBest = ns.streak;
    if (ns.run > runBest) runBest = ns.run;
    if (runBest !== (runRaw && runRaw.days || 0)) nsPut.push([K.nsRun, { days: runBest }]);
    ns.runBest = runBest;
    const log = logRaw || {};
    if (log[m] !== ns.count) {
      log[m] = ns.count;
      nsPut.push([K.nsLog, log]);
    }
    if (nsPut.length) {
      try {
        await mset(nsPut);
      } catch (e) {
      }
    }
    ns.total = Object.keys(log).reduce((a, k) => a + (log[k] || 0), 0);
    ns.perfect = Object.keys(log).filter((k) => {
      const lastD = new Date(Date.UTC(Number(k.slice(0, 4)), Number(k.slice(5, 7)), 0)).getUTCDate();
      return log[k] >= lastD;
    }).length;
    const cardsArr = await cardsP;
    const cardPays = new Set((cardsArr || []).flatMap((c) => c.pays || [c.pay]).filter(Boolean));
    const hold = Object.assign({ on: false, have: 0, note: "" }, cfg.hold || {});
    hold.haveAt = Number(hold.haveAt) || 0;
    if (!hold.haveAt && money(hold.have) > 0) {
      hold.haveAt = Date.now();
      try {
        set(K.cfg, Object.assign({}, cfg, {
          hold: Object.assign({}, cfg.hold || {}, { haveAt: hold.haveAt })
        })).catch(() => {
        });
      } catch (e) {
      }
    }
    hold.moved = 0;
    hold.cardHeld = 0;
    hold.billPaid = 0;
    if (hold.haveAt > 0) {
      const \uB098\uC911\uC5D0\uB098\uAC08 = (t) => {
        const p = t.pay || "";
        return cardPays.has(p) && !/체크|직불|선불|debit/i.test(p);
      };
      const \uB098\uAC04\uC62E\uAE40 = /* @__PURE__ */ new Set(["\uC800\uCD95", "\uD22C\uC790", "\uB300\uCD9C \uAC1A\uAE30"]);
      Object.keys(txCache).forEach((mm) => (txCache[mm] || []).forEach((t) => {
        if (!t.ts || t.ts <= hold.haveAt) return;
        if (t.k === "in") hold.moved += money(t.amt);
        else if (t.k === "mv") {
          if (\uB098\uAC04\uC62E\uAE40.has(t.cat || "")) hold.moved -= money(t.amt);
          return;
        } else if ((t.cat || "") === "\uCE74\uB4DC\uB300\uAE08") return;
        else if (\uB098\uC911\uC5D0\uB098\uAC08(t)) hold.cardHeld += money(t.amt);
        else hold.moved -= money(t.amt);
      }));
      hold.billPaid = (cardsArr || []).reduce((a, c) => a + (c.passed || []).reduce((x, p) => x + (Number(p.amt) || 0), 0), 0);
      hold.moved -= hold.billPaid;
      hold.haveSet = money(hold.have);
      hold.have = hold.haveSet + hold.moved;
    }
    {
      const \uB2E4\uC74C\uB2ECM = shiftM(cur, 1);
      const \uBE84\uAC83 = (f) => f.type === "card" || f.kind === "in" || cardPays.has(f.pay || "");
      const \uB2E4\uC74C\uB2EC\uC904 = \uACB9\uCE5C\uC790\uB3D9\uC904\uBE7C\uAE30(await get(K.tx(\uB2E4\uC74C\uB2ECM)) || []).tx;
      const rows = [];
      activeAt(fixed, \uB2E4\uC74C\uB2ECM).filter((f) => !\uBE84\uAC83(f)).forEach((f) => {
        duesIn(\uB2E4\uC74C\uB2ECM, f).forEach((d) => {
          if (\uB2E4\uC74C\uB2EC\uC904.some((t) => t.fx === f.id && t.d === d)) return;
          rows.push({ d, name: f.name, amt: amtFor(\uB2E4\uC74C\uB2ECM, f), memo: f.memo || "" });
        });
      });
      rows.sort((a, b) => a.d < b.d ? -1 : 1);
      hold.next = { m: \uB2E4\uC74C\uB2ECM, bank: rows.reduce((a, r) => a + r.amt, 0), rows };
    }
    if (hold.on) {
      const live2 = activeAt(fixed, cur).filter((f) => f.type !== "card");
      const \uCE74\uB4DC\uB300\uAE08\uD56D\uBAA9 = activeAt(fixed, cur).filter((f) => f.type === "card" && f.kind !== "in");
      hold.cardFixedSkipped = \uCE74\uB4DC\uB300\uAE08\uD56D\uBAA9.reduce((a, f) => a + amtIn\uC6D0\uB798(cur, f), 0);
      const onCard = (f) => cardPays.has(f.pay || "");
      const \uB2EC\uB9C8\uB2E4 = (f) => !f.once && !f.irr && (!f.every || f.every === "m" || f.every === "w");
      const \uB3C4\uB294\uAC83 = live2.filter(\uB2EC\uB9C8\uB2E4);
      hold.fixedBank = \uB3C4\uB294\uAC83.reduce((a, f) => a + (f.kind === "in" || onCard(f) ? 0 : amtIn\uC6D0\uB798(cur, f)), 0);
      hold.fixedCard = \uB3C4\uB294\uAC83.reduce((a, f) => a + (f.kind === "in" || !onCard(f) ? 0 : amtIn\uC6D0\uB798(cur, f)), 0);
      hold.fixed = hold.fixedBank + hold.fixedCard;
      const \uC774\uB2EC\uB9CC\uD56D\uBAA9 = live2.filter((f) => !\uB2EC\uB9C8\uB2E4(f) && f.kind !== "in" && amtIn(cur, f) > 0);
      hold.onlyThisMonth = \uC774\uB2EC\uB9CC\uD56D\uBAA9.reduce((a, f) => a + amtIn(cur, f), 0);
      hold.onlyThisMonthNames = \uC774\uB2EC\uB9CC\uD56D\uBAA9.map((f) => f.name);
      const todayISO2 = today10();
      const todayD = Number(todayISO2.slice(8, 10));
      const lastD = new Date(Date.UTC(Number(cur.slice(0, 4)), Number(cur.slice(5, 7)), 0)).getUTCDate();
      hold.leftDays = Math.max(0, lastD - todayD);
      hold.fixedLeft = live2.reduce((a, f) => f.kind === "in" ? a : a + amtFor(cur, f) * duesIn(cur, f).filter((d) => d > todayISO2).length, 0);
      const dueOf = (b) => {
        if (!b || b.d < todayISO2) return 0;
        return b.amt || 0;
      };
      hold.cardDue = (cardsArr || []).reduce((a, c) => a + dueOf(c.next) + dueOf(c.after), 0);
      const \uCCAD\uAD6C\uC561 = (b) => {
        if (!b || b.d < todayISO2) return 0;
        return (b.amt || 0) + (b.plan || 0);
      };
      const cardDueIn = (M) => (cardsArr || []).reduce((a, c) => {
        if (c.next && c.next.d.slice(0, 7) === M) return a + \uCCAD\uAD6C\uC561(c.next);
        if (c.after && c.after.d.slice(0, 7) === M) return a + \uCCAD\uAD6C\uC561(c.after);
        const \uB9C8\uC9C0\uB9C9\uCCAD\uAD6C\uC6D4 = c.after ? c.after.d.slice(0, 7) : cur;
        if (M <= \uB9C8\uC9C0\uB9C9\uCCAD\uAD6C\uC6D4) return a;
        const cy = cycleOf(M, c);
        const \uC774\uB984\uB4E4 = new Set(c.pays || [c.pay || c.name]);
        const ms = [.../* @__PURE__ */ new Set([cy.from.slice(0, 7), cy.to.slice(0, 7)])];
        return a + fixed.reduce((s, f) => {
          if (f.off || f.irr || f.kind === "in" || !\uC774\uB984\uB4E4.has(f.pay || "")) return s;
          return s + ms.reduce((s2, mm) => {
            if (f.from && mm < f.from) return s2;
            if (f.to && mm > f.to) return s2;
            if (mm < \uB300\uCD9C\uCCAB\uB2EC(f)) return s2;
            return s2 + amtFor(mm, f) * duesIn(mm, f).filter((d) => d >= cy.from && d <= cy.to).length;
          }, 0);
        }, 0);
      }, 0);
      const SKIP = new Set(["\uCE74\uB4DC\uB300\uAE08"].concat(cfg.skipCats || []));
      let dayOut = 0, dayCount = 0;
      const cache = txCache;
      back3.forEach((mm) => {
        (cache[mm] || []).forEach((t) => {
          if (t.k !== "out" || t.fx) return;
          if (SKIP.has(t.cat || "")) return;
          dayOut += t.amt;
        });
        const lastD2 = new Date(Date.UTC(Number(mm.slice(0, 4)), Number(mm.slice(5, 7)), 0)).getUTCDate();
        dayCount += mm === cur ? todayD : lastD2;
      });
      hold.spentPerDay = dayCount > 0 ? dayOut / dayCount : 0;
      const fixedCats = new Set(live2.map((f) => f.cat).filter(Boolean));
      const freeN = {};
      back3.forEach((mm) => {
        (cache[mm] || []).forEach((t) => {
          if (t.k !== "out" || t.fx) return;
          const c = t.cat || "";
          if (!c || fixedCats.has(c) || SKIP.has(c)) return;
          freeN[c] = (freeN[c] || 0) + 1;
        });
      });
      hold.freeCats = Object.entries(freeN).filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([c]) => c);
      const perMonth = hold.fixed + hold.spentPerDay * 30;
      const afterThis = money(hold.have) - hold.fixedLeft - hold.cardDue;
      hold.months = perMonth > 0 ? Math.max(0, afterThis / perMonth) : 0;
      hold.wholeMonths = Math.floor(hold.months);
      const goal = Math.min(60, Math.max(1, Number(hold.goal) || 3));
      hold.goal = goal;
      const \uB0A0\uB354\uD5742 = (iso, n) => new Date(Date.parse(iso + "T00:00:00Z") + n * 864e5).toISOString().slice(0, 10);
      const \uC55E\uC73C\uB85C\uACE0\uC815\uBAA9\uB85D = (days) => {
        const endISO = \uB0A0\uB354\uD5742(todayISO2, days);
        const rows = [];
        for (let M = cur; M <= endISO.slice(0, 7); M = shiftM(M, 1)) {
          activeAt(fixed, M).filter((f) => f.type !== "card" && f.kind !== "in").forEach((f) => {
            duesIn(M, f).filter((d) => d > todayISO2 && d <= endISO).forEach((d) => rows.push({ d, name: f.name || "\uACE0\uC815\uC9C0\uCD9C", amt: amtFor(M, f), card: onCard(f) }));
          });
        }
        return rows.sort((a, b) => a.d < b.d ? -1 : a.d > b.d ? 1 : 0);
      };
      const \uCE74\uB4DC\uAC12 = (days) => {
        const \uB05D2 = \uB0A0\uB354\uD5742(todayISO2, days);
        return (cardsArr || []).reduce((a2, c) => a2 + (c.next && c.next.d <= \uB05D2 ? dueOf(c.next) : 0) + (c.after && c.after.d <= \uB05D2 ? dueOf(c.after) : 0), 0);
      };
      hold.cardLater = Math.max(0, hold.cardDue - \uCE74\uB4DC\uAC12(30));
      hold.cardDue = \uCE74\uB4DC\uAC12(30);
      const \uC55E\uC73C\uB85C\uACE0\uC815 = (days) => \uC55E\uC73C\uB85C\uACE0\uC815\uBAA9\uB85D(days).reduce((a, r) => a + r.amt, 0);
      hold.fixedAhead = \uC55E\uC73C\uB85C\uACE0\uC815(30);
      const dayMoneyD = (days) => {
        const need = \uCE74\uB4DC\uAC12(days) + \uC55E\uC73C\uB85C\uACE0\uC815(days);
        return Math.max(0, money(hold.have) - need) / days;
      };
      const dayMoney = (g) => dayMoneyD(g * 30);
      hold.daily = dayMoney(goal);
      hold.dayPlans = [7, 14, 21, 30].map((D) => ({ d: D, daily: dayMoneyD(D) }));
      hold.plans = [.../* @__PURE__ */ new Set([1, 2, 3, goal])].sort((a, b) => a - b).map((g) => ({ g, daily: dayMoney(g) }));
      hold.sched = [];
      for (let i = 0; i < Math.min(12, goal); i++) {
        const M = shiftM(cur, i);
        const \uC774\uB2EC = i === 0;
        const bank = activeAt(fixed, M).filter((f) => f.type !== "card" && f.kind !== "in" && !onCard(f)).reduce((a, f) => a + amtFor(M, f) * duesIn(M, f).filter((d) => \uC774\uB2EC ? d > todayISO2 : true).length, 0);
        const card = cardDueIn(M);
        hold.sched.push({ m: M, bank, card, total: bank + card, part: \uC774\uB2EC });
      }
      hold.free = money(hold.have) - hold.cardDue - hold.fixedAhead;
      const \uC55E\uC73C\uB85C30 = \uC55E\uC73C\uB85C\uACE0\uC815\uBAA9\uB85D(30);
      const \uB0A8\uC740\uACE0\uC815 = \uC55E\uC73C\uB85C30.slice();
      const \uC62E\uACA8\uB2F4\uAE30 = (it) => {
        const i = \uB0A8\uC740\uACE0\uC815.findIndex((r) => r.d === it.d && r.name === it.name && r.amt === it.amt);
        if (i < 0) return 0;
        \uB0A8\uC740\uACE0\uC815.splice(i, 1);
        return it.amt;
      };
      const \uCC3D\uB05D = \uB0A0\uB354\uD5742(todayISO2, 30);
      const \uCE74\uB4DC\uC904 = [];
      (cardsArr || []).forEach((c) => [c.next, c.after].forEach((b) => {
        if (!b || b.d < todayISO2) return;
        let amt = dueOf(b);
        if (b.d <= \uCC3D\uB05D && b.to > todayISO2) (b.items || []).forEach((i) => {
          if (i.plan) amt += \uC62E\uACA8\uB2F4\uAE30(i);
        });
        if (amt > 0) \uCE74\uB4DC\uC904.push({ name: c.name, d: b.d, amt });
      }));
      \uCE74\uB4DC\uC904.sort((a, b) => a.d < b.d ? -1 : a.d > b.d ? 1 : 0);
      const \uB05D\uB0A0 = \uCC3D\uB05D;
      const \uACE7\uB098\uAC08 = \uCE74\uB4DC\uC904.filter((x) => x.d <= \uB05D\uB0A0);
      const \uB098\uC911\uC5D0 = \uCE74\uB4DC\uC904.filter((x) => x.d > \uB05D\uB0A0);
      const \uB2EC\uB05D = (mk) => new Date(Date.UTC(Number(mk.slice(0, 4)), Number(mk.slice(5, 7)), 0)).toISOString().slice(0, 10);
      const \uCE74\uB4DC\uB85C\uBE60\uC9C8 = \uB0A8\uC740\uACE0\uC815.filter((r) => r.card);
      if (\uCE74\uB4DC\uB85C\uBE60\uC9C8.length && \uCE74\uB4DC\uC904.length) {
        const \uBAAB = \uCE74\uB4DC\uB85C\uBE60\uC9C8.reduce((t, r) => t + r.amt, 0);
        const \uBC1B\uC744\uC904 = \uACE7\uB098\uAC08[0] || \uCE74\uB4DC\uC904[0];
        \uBC1B\uC744\uC904.bill = \uBC1B\uC744\uC904.amt;
        \uBC1B\uC744\uC904.plan = \uBAAB;
        \uBC1B\uC744\uC904.amt += \uBAAB;
        for (let i = \uB0A8\uC740\uACE0\uC815.length - 1; i >= 0; i -= 1) if (\uB0A8\uC740\uACE0\uC815[i].card) \uB0A8\uC740\uACE0\uC815.splice(i, 1);
      }
      const \uB2EC\uBB36\uC74C = /* @__PURE__ */ new Map();
      \uB0A8\uC740\uACE0\uC815.forEach((r) => {
        const k = String(r.d).slice(0, 7);
        const v = \uB2EC\uBB36\uC74C.get(k) || { m: k, amt: 0 };
        v.amt += r.amt;
        \uB2EC\uBB36\uC74C.set(k, v);
      });
      const \uCC3D\uCCAB\uB0A0 = \uB0A0\uB354\uD5742(todayISO2, 1);
      const fixedRows = [...\uB2EC\uBB36\uC74C.values()].sort((a, b) => a.m < b.m ? -1 : 1).map((v) => {
        const \uB2EC\uCCAB\uB0A0 = v.m + "-01", \uB2EC\uB9C8\uC9C0\uB9C9 = \uB2EC\uB05D(v.m);
        return {
          amt: v.amt,
          from: \uCC3D\uCCAB\uB0A0 > \uB2EC\uCCAB\uB0A0 ? \uCC3D\uCCAB\uB0A0 : \uB2EC\uCCAB\uB0A0,
          to: \uB05D\uB0A0 < \uB2EC\uB9C8\uC9C0\uB9C9 ? \uB05D\uB0A0 : \uB2EC\uB9C8\uC9C0\uB9C9
        };
      });
      const \uD558\uB8E8\uC0B4\uB9BC = Math.max(0, Math.round(hold.spentPerDay || 0));
      const \uB098\uAC08\uB0A0 = {};
      \uB0A8\uC740\uACE0\uC815.forEach((r) => {
        \uB098\uAC08\uB0A0[r.d] = (\uB098\uAC08\uB0A0[r.d] || 0) + r.amt;
      });
      \uCE74\uB4DC\uC904.forEach((c) => {
        if (c.d <= \uB05D\uB0A0) \uB098\uAC08\uB0A0[c.d] = (\uB098\uAC08\uB0A0[c.d] || 0) + c.amt;
      });
      const \uD558\uB8E8\uC5B4\uB9BC = (hold.fixed + \uD558\uB8E8\uC0B4\uB9BC * 30) / 30;
      let \uB0A8\uC740\uC794 = money(hold.have), \uBC84\uD2F4\uB0A0 = 0;
      for (let i = 1; i <= 400; i++) {
        const \uADF8\uB0A0 = \uB0A0\uB354\uD5742(todayISO2, i);
        \uB0A8\uC740\uC794 -= \uADF8\uB0A0 <= \uB05D\uB0A0 ? (\uB098\uAC08\uB0A0[\uADF8\uB0A0] || 0) + \uD558\uB8E8\uC0B4\uB9BC : \uD558\uB8E8\uC5B4\uB9BC;
        if (\uB0A8\uC740\uC794 < 0) break;
        \uBC84\uD2F4\uB0A0 = i;
      }
      hold.canDays = \uBC84\uD2F4\uB0A0;
      hold.canTo = \uB0A0\uB354\uD5742(todayISO2, \uBC84\uD2F4\uB0A0);
      hold.freeWhy = {
        fixedRows,
        have: money(hold.have),
        cardDue: \uACE7\uB098\uAC08.reduce((a, x) => a + x.amt, 0),
        cards: \uACE7\uB098\uAC08,
        laterDue: \uB098\uC911\uC5D0.reduce((a, x) => a + x.amt, 0),
        later: \uB098\uC911\uC5D0,
        fixedAhead: \uB0A8\uC740\uACE0\uC815.reduce((a, r) => a + r.amt, 0),
        fixedFrom: \uB0A0\uB354\uD5742(todayISO2, 1),
        fixedTo: \uB05D\uB0A0,
        /* ⛔ 고정지출 **목록**은 안 내보낸다 (사장님 지시 2026-09-01 : 「카드·은행이
           가져갈 거예요 펼쳐보기에 들어있는 내용이잖아」). 같은 목록을 두 자리에 두지 않는다.
           남은고정 은 합계(fixedAhead)를 내려고만 쓴다. */
        free: hold.free
      };
    }
    const cards = (cardsArr || []).slice();
    cards.orphan = cardsArr && cardsArr.orphan || [];
    const answered = answeredRaw || {};
    const use = useAsk(tx, fixed, answered);
    use.done = Object.keys(answered).length;
    use.sell = Object.keys(answered).filter((k) => answered[k].v === "no" && !k.startsWith("fx:")).map((k) => ({ key: k, name: answered[k].name || "", ask: Number(answered[k].ask) || 0 }));
    const subs = fixed.filter((f) => !f.off && !f.irr && f.type === "sub");
    const subLeft = subs.filter((f) => !answered["fx:" + f.id]);
    use.sub = {
      one: subLeft[0] ? { key: "fx:" + subLeft[0].id, name: subLeft[0].name, amt: subLeft[0].amt } : null,
      left: subLeft.length,
      // 1년치 — 매주는 52번, 매년은 한 번, 나머지는 열두 번
      year: subs.reduce((a, f) => a + money(f.amt) * (f.every === "w" ? 52 : f.every === "y" ? 1 : 12), 0),
      // 끊기로 한 것 — 아직 안 끈 것만 (끄면 off 가 되어 목록에서 빠진다)
      cut: subs.filter((f) => answered["fx:" + f.id] && answered["fx:" + f.id].v === "no").map((f) => ({ key: "fx:" + f.id, id: f.id, name: f.name, amt: f.amt }))
    };
    const \uD560\uBD80\uAC12 = (f) => {
      if (!f || f.type !== "inst" || !f.inst) return f;
      const out = Object.assign({}, f, { cur: amtFor(m, f) });
      if (isMonth(f.to) && f.to > m) {
        const [yy, mo] = m.split("-").map(Number);
        const \uB2E4\uC74C = new Date(Date.UTC(yy, mo, 1)).toISOString().slice(0, 7);
        out.rest = monthRange(\uB2E4\uC74C, f.to).slice(0, 60).reduce((a, mm) => a + amtFor(mm, f), 0);
      }
      return out;
    };
    return {
      ok: true,
      m,
      tx,
      sum,
      carry,
      months,
      cfg,
      fixed: (fixed || []).map(\uD560\uBD80\uAC12),
      note: note || "",
      noSpend: ns,
      tithe,
      // 체크할 것 — 달과 상관없이 늘 같은 목록이 실려 간다
      checks: Array.isArray(checksRaw) ? checksRaw : [],
      // 받아 온 김에 자료 번호도 같이 실어 보낸다 (읽기에서는 이 값이 그대로 맞다)
      rev: Number(drevRaw || 0),
      cards,
      cardOrphan: cardsArr && cardsArr.orphan || [],
      use,
      hold,
      /* ⛔ 이름을 save12 그대로 둔다 — 화면이 그 이름으로 읽는다. 담기는 것만 늘었다.
         ⛔ 열두 달을 넘어가면 화면이 가로로 밀어 보여준다(app.css 의 .svbars). */
      save12: \uBAA8\uC740\uB2EC\uB9C8\uB2E4,
      saveAll: \uBAA8\uC740\uB204\uC801,
      fixedStat: {
        plan: live.reduce((a, f) => a + (f.kind === "in" ? 0 : amtIn(m, f)), 0),
        // 이번 달 고정지출 총액 (매주는 횟수만큼)
        /* ⛔ 「통장에서 빠지는 것」과 「카드로 나가는 것」을 갈라 둔다 (사장님 2026-08-04).
           카드로 산 것은 그 자리에서 통장이 줄지 않는다 — 결제일에 카드값으로 한 번에 빠진다.
           둘을 더한 수만 보여주면 「이번 달 통장에서 얼마 나가나」를 영영 알 수 없다. */
        bank: live.reduce((a, f) => a + (f.kind === "in" || cardPays.has(f.pay || "") ? 0 : amtIn(m, f)), 0),
        card: live.reduce((a, f) => a + (f.kind === "in" || !cardPays.has(f.pay || "") ? 0 : amtIn(m, f)), 0),
        done: tx.reduce((a, t) => a + (t.fx && t.k === "out" ? t.amt : 0), 0),
        // 이미 나간 것
        left: upcoming.reduce((a, u) => a + (u.kind === "out" ? u.amt : 0), 0),
        // 남은 예정
        upcoming
      },
      today: today10()
    };
  }
  async function handler(req, res) {
    const r = String(req.query.r || "").toLowerCase();
    try {
      if (r === "me") {
        return res.status(200).json({
          ok: true,
          authed: isAuthed(req),
          locked: PIN_LOGIN_ON,
          kakao: KAKAO_ON,
          google: GOOGLE_ON,
          store: REDIS_ON,
          // 어느 길로 들어와 계신지 (설정에서 보여준다) — 회원번호 자체는 내보내지 않는다
          who: whoKind(req)
        });
      }
      if (r === "login") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        if (!PIN_LOGIN_ON) {
          if (SOCIAL_ON) {
            return res.status(403).json({ ok: false, err: "\uCE74\uCE74\uC624\uB098 \uAD6C\uAE00\uB85C \uB4E4\uC5B4\uC640 \uC8FC\uC138\uC694." });
          }
          return res.status(503).json({
            ok: false,
            err: "\uC9C0\uAE08\uC740 \uB85C\uADF8\uC778 \uAE38\uC774 \uB2EB\uD600 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uB4A4\uC5D0 \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694."
          });
        }
        const c = await checkPin(req, (req.body || {}).pin);
        if (!c.ok) return sendPinFailure(res, c);
        issue(res, "me");
        return res.status(200).json({ ok: true });
      }
      if (r === "logout") {
        clear(res);
        return res.status(200).json({ ok: true });
      }
      if (r === "qr") {
        const host = String(req.headers["x-forwarded-host"] || req.headers.host || "localhost");
        const proto = String(req.headers["x-forwarded-proto"] || (host.startsWith("localhost") ? "http" : "https")).split(",")[0];
        const \uC9D1\uC8FC\uC18C = "https://iamagoodperson.vercel.app/";
        const \uC774\uB984 = host.split(":")[0];
        const \uB0B4\uCEF4\uD4E8\uD130 = /^(localhost|127\.|0\.0\.0\.0|\[?::1\]?$)/.test(\uC774\uB984);
        const \uBBF8\uB9AC\uBCF4\uAE30 = \uC774\uB984.endsWith(".vercel.app") && \uC774\uB984 !== "iamagoodperson.vercel.app";
        const \uC8FC\uC18C = \uB0B4\uCEF4\uD4E8\uD130 || \uBBF8\uB9AC\uBCF4\uAE30 ? \uC9D1\uC8FC\uC18C : proto + "://" + host + "/";
        const svg = await import_qrcode.default.toString(\uC8FC\uC18C, {
          type: "svg",
          margin: 0,
          errorCorrectionLevel: "M",
          color: { dark: "#101208", light: "#0000" }
        });
        res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
        res.setHeader("Cache-Control", "public, max-age=3600");
        return res.status(200).send(svg);
      }
      if (r === "demo") {
        assertStore();
        const m = isMonth(req.query.m) ? req.query.m : curMonth();
        const \uB9C9\uC2EC\uC74C = await \uC608\uC2DC\uCC44\uC6B0\uAE30(m);
        const out = await monthPayload(keys("__demo__"), m);
        if (out.rev === void 0) out.rev = 0;
        out.lic = { canWrite: true, paid: false, left: 0, demo: true };
        res.setHeader("Cache-Control", \uB9C9\uC2EC\uC74C ? "no-store" : "public, max-age=300, s-maxage=300");
        return res.status(200).json(out);
      }
      if (r === "coupon") {
        const \uC5F4\uC1E0 = "";
        if (!\uC5F4\uC1E0) return res.status(503).json({ ok: false, err: "\uC544\uC9C1 \uC5F4\uC1E0\uAC00 \uC5C6\uC5B4\uC694" });
        const \uC628\uAC83 = String(req.headers["x-kr-token"] || req.query.t || "");
        if (\uC628\uAC83 !== \uC5F4\uC1E0) return res.status(403).json({ ok: false, err: "\uC5F4\uC1E0\uAC00 \uB2E4\uB985\uB2C8\uB2E4" });
        assertStore();
        const body = req.body || {};
        const code = String(req.query.code || body.code || "").trim().toUpperCase();
        const item = String(req.query.item || body.item || "").trim();
        const \uAE00\uC790\uD45C = "ACDEFGHJKLMNPQRTUVWXY34789";
        const \uBAA8\uC591\uB9DE\uB098 = code.slice(0, 3) === "KR-" && code.length === 9 && code.slice(3).split("").every((c) => \uAE00\uC790\uD45C.indexOf(c) >= 0);
        if (!\uBAA8\uC591\uB9DE\uB098) return res.status(200).json({ ok: true, valid: false, err: "\uBC88\uD638 \uBAA8\uC591\uC774 \uB2EC\uB77C\uC694" });
        const \uBAA9\uB85D = await get(REELS) || [];
        const \uAC83 = \uBAA9\uB85D.find((x) => x.code === code && !x.off);
        if (!\uAC83) return res.status(200).json({ ok: true, valid: false, err: "\uC5C6\uB294 \uBC88\uD638\uC608\uC694" });
        if (\uAC83.warn && !\uAC83.warn.fixed) {
          return res.status(200).json({ ok: true, valid: false, err: "\uC7A0\uC2DC \uBA48\uCD98 \uBC88\uD638\uC608\uC694 (\uD45C\uC2DC\uB97C \uACE0\uCCD0 \uC8FC\uC138\uC694)" });
        }
        if (\uAC83.until && \uAC83.until < today10()) {
          return res.status(200).json({ ok: true, valid: false, err: "\uAE30\uAC04\uC774 \uC9C0\uB09C \uBC88\uD638\uC608\uC694", until: \uAC83.until });
        }
        const \uB0A8\uC740\uAC83 = Object.assign(\uAFB8\uB7EC\uBBF8(), \uAC83.items || {});
        const \uAC89 = (\uB354) => Object.assign({
          ok: true,
          valid: true,
          until: \uAC83.until || "",
          partner: !!\uAC83.partner,
          items: \uB0A8\uC740\uAC83,
          gift: REELS_GIFT
        }, \uB354 || {});
        if (req.method !== "POST") return res.status(200).json(\uAC89());
        if (!REELS_GIFT.some((x) => x.id === item)) {
          return res.status(200).json(\uAC89({ valid: false, err: "\uADF8\uB7F0 \uAC83\uC740 \uC5C6\uC5B4\uC694" }));
        }
        if (!(Number(\uB0A8\uC740\uAC83[item]) > 0)) {
          return res.status(200).json(\uAC89({ valid: false, err: "\uADF8\uAC74 \uB2E4 \uC4F0\uC168\uC5B4\uC694" }));
        }
        \uB0A8\uC740\uAC83[item] = Number(\uB0A8\uC740\uAC83[item]) - 1;
        \uAC83.items = \uB0A8\uC740\uAC83;
        \uAC83.used = (Array.isArray(\uAC83.used) ? \uAC83.used : []).concat([{ i: item, at: today10() }]).slice(-20);
        await set(REELS, \uBAA9\uB85D);
        return res.status(200).json(\uAC89({ used: item, items: \uB0A8\uC740\uAC83 }));
      }
      if (requireAuth(req, res)) return;
      assertStore();
      const ws = wsOf(req);
      if (!ws) return res.status(401).json({ ok: false, err: "auth" });
      const K = keys(ws);
      if (ws === "me" && \uBCF8\uB0A0\uBA54\uBAA8 !== today10()) {
        const \uC624\uB298 = today10();
        try {
          if (await get(OWNER_SEEN) !== \uC624\uB298) await set(OWNER_SEEN, \uC624\uB298);
          \uBCF8\uB0A0\uBA54\uBAA8 = \uC624\uB298;
        } catch (e) {
        }
      }
      if (r === "answers") {
        const map = await get(K.use) || {};
        const rows = Object.entries(map).map(([key, a]) => ({
          key,
          v: a.v,
          name: a.name || "",
          at: a.at || "",
          ask: a.ask || 0
        })).sort((a, b) => String(b.at).localeCompare(String(a.at)));
        return res.status(200).json({ ok: true, rows });
      }
      if (r === "rev") {
        return res.status(200).json({ ok: true, rev: Number(await get(K.drev) || 0) });
      }
      let drevNow = null;
      if (req.method !== "GET") {
        try {
          drevNow = Number(await incr(K.drev)) || 0;
        } catch (e) {
        }
      }
      const withRev = async (out) => {
        if (!out || out.ok === false) return out;
        if (drevNow != null) out.rev = drevNow;
        else if (out.rev === void 0) out.rev = Number(await get(K.drev) || 0);
        return out;
      };
      const sendMonth = async (mm) => {
        const [lic1, sold1] = await Promise.all([\uC774\uC6A9\uAD8C || licOf(ws), soldCount()]);
        \uC774\uC6A9\uAD8C = lic1;
        const out = await withRev(await monthPayload(K, mm, \uC774\uC6A9\uAD8C.owner ? "" : \uC774\uC6A9\uAD8C.first));
        out.lic = licView(\uC774\uC6A9\uAD8C, sold1);
        return res.status(200).json(out);
      };
      let \uC774\uC6A9\uAD8C = null;
      const \uC801\uC744\uC218\uC788\uB098 = async () => {
        if (!\uC774\uC6A9\uAD8C) \uC774\uC6A9\uAD8C = await licOf(ws);
        if (!\uC774\uC6A9\uAD8C.owner) {
          try {
            if ((await \uC9C0\uAE08\uB2E8\uACC4()).\uB2E8\uACC4 === "\uC885\uB8CC") return { ok: false, closed: true, err: "\uC11C\uBE44\uC2A4\uB97C \uB9C8\uCCE4\uC5B4\uC694. \uC801\uC5B4 \uB450\uC2E0 \uAC74 \uACC4\uC18D \uBCF4\uACE0, \uC124\uC815 \u2192 \u300C\uD1B5\uC9F8\uB85C \uCC59\uACA8 \uB450\uAE30\u300D\uB85C \uBC1B\uC544 \uAC00\uC2E4 \uC218 \uC788\uC5B4\uC694." };
          } catch (e) {
          }
        }
        return writeBlocked(\uC774\uC6A9\uAD8C);
      };
      if (r === "month") {
        const m = isMonth(req.query.m) ? req.query.m : curMonth();
        const [lic0, sold0] = await Promise.all([licOf(ws), soldCount()]);
        const out = await withRev(await monthPayload(K, m, lic0.owner ? "" : lic0.first));
        out.lic = licView(lic0, sold0);
        if (ws !== "me") {
          try {
            const \uC9C0\uAE08 = await \uC9C0\uAE08\uB2E8\uACC4();
            if (\uC9C0\uAE08.\uB2E8\uACC4 !== "\uC5C6\uC74C") out.\uC6B4\uC601\uC790 = { \uC9C0\uB09C\uB0A0: \uC9C0\uAE08.\uC9C0\uB09C\uB0A0, \uAE09\uD568: \uC9C0\uAE08.\uB2E8\uACC4 !== "\uC548\uB0B4", \uC885\uB8CC\uC77C: \uC9C0\uAE08.\uB2E8\uACC4 === "\uC548\uB0B4" ? "" : \uC9C0\uAE08.\uC885\uB8CC\uC77C, \uC885\uB8CC\uB428: \uC9C0\uAE08.\uB2E8\uACC4 === "\uC885\uB8CC" };
          } catch (e) {
          }
        }
        return res.status(200).json(out);
      }
      if (r === "tx") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        const { op, tx } = req.body || {};
        const t = tx || {};
        if (op === "skip" || op === "unskip") {
          if (!isDate(t.d) || !t.fx) return res.status(400).json({ ok: false, err: "\uB0A0\uC9DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694." });
          const sm = t.d.slice(0, 7);
          const \uD45C = await get(K.mat(sm)) || {};
          const key = slug(t.fx, 24) + "@" + t.d;
          const ids = (Array.isArray(\uD45C.ids) ? \uD45C.ids : []).filter((x) => x !== key);
          if (op === "skip") ids.push(key);
          await set(K.mat(sm), Object.assign({}, \uD45C, { ids }));
          return sendMonth(sm);
        }
        if (op === "del") {
          const m2 = isMonth(t.m) ? t.m : isDate(t.d) ? t.d.slice(0, 7) : curMonth();
          const list = await get(K.tx(m2)) || [];
          await saveMonth(K, m2, list.filter((x) => x.id !== t.id));
          return sendMonth(isMonth(t.viewM) ? t.viewM : m2);
        }
        if (op === "nt") {
          const m2 = isMonth(t.m) ? t.m : isDate(t.d) ? t.d.slice(0, 7) : curMonth();
          const list = await get(K.tx(m2)) || [];
          if (!list.some((x) => x && x.id === t.id)) return res.status(404).json({ ok: false, err: "\uADF8 \uC904\uC744 \uBABB \uCC3E\uC558\uC5B4\uC694." });
          await saveMonth(K, m2, list.map((x) => {
            if (!x || x.id !== t.id) return x;
            const y = Object.assign({}, x);
            if (t.nt) y.nt = 1;
            else delete y.nt;
            return y;
          }));
          return sendMonth(isMonth(t.viewM) ? t.viewM : m2);
        }
        if (op !== "edit") {
          const \uB9C9\uD798 = await \uC801\uC744\uC218\uC788\uB098();
          if (\uB9C9\uD798) return res.status(402).json(\uB9C9\uD798);
        }
        if (!isDate(t.d)) return res.status(400).json({ ok: false, err: "\uB0A0\uC9DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694." });
        const amt = money(t.amt);
        if (amt <= 0) return res.status(400).json({ ok: false, err: "\uAE08\uC561\uC744 \uB123\uC5B4 \uC8FC\uC138\uC694." });
        const m = t.d.slice(0, 7);
        const rec = {
          id: t.id || newId(),
          d: t.d,
          /* 'mv' = 옮김. 카드값 인출·저축처럼 **내 돈이 자리만 바꾸는 것**이다.
             카드로 산 것과 카드값 인출을 둘 다 지출로 적으면 같은 돈을 두 번 센다. */
          k: t.k === "in" ? "in" : t.k === "mv" ? "mv" : "out",
          amt,
          cat: clean(t.cat, 20),
          pay: clean(t.pay, 20),
          memo: clean(t.memo, 80),
          st: clean(t.st, 8),
          // 줄에 붙이는 스티커(그림문자)
          ts: Number(t.ts) || Date.now()
        };
        if (t.fx) rec.fx = slug(t.fx, 24);
        if (t.nt) rec.nt = 1;
        if (op === "edit") {
          const om = isMonth(t.om) ? t.om : m;
          const \uC61B\uC904 = (await get(K.tx(om)) || []).find((x) => x.id === rec.id) || null;
          if (t.nt === void 0 && \uC61B\uC904 && \uC61B\uC904.nt) rec.nt = 1;
          if (om !== m) {
            const olist = await get(K.tx(om)) || [];
            await saveMonth(K, om, olist.filter((x) => x.id !== rec.id));
          }
          const list = (await get(K.tx(m)) || []).filter((x) => x.id !== rec.id);
          list.push(rec);
          await saveMonth(K, m, list);
          if (rec.fx && \uC61B\uC904 && money(\uC61B\uC904.amt) !== rec.amt) {
            const fixed = await get(K.fixed) || [];
            const f = fixed.find((x) => x.id === rec.fx);
            if (f && amtFor(m, f) === money(f.amt)) {
              await set(K.fixed, fixed.map((x) => x.id === f.id ? Object.assign({}, x, { amt: rec.amt }) : x));
              await incr(K.rev);
            }
          }
        } else {
          const list = await get(K.tx(m)) || [];
          if (list.some((x) => x && x.id === rec.id)) return sendMonth(m);
          list.push(rec);
          await saveMonth(K, m, list);
          await bumpWrote(ws, \uC774\uC6A9\uAD8C);
        }
        return sendMonth(op === "edit" && isMonth(t.viewM) ? t.viewM : m);
      }
      if (r === "fixed") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        const { op, item } = req.body || {};
        let it = item || {};
        let fixed = await get(K.fixed) || [];
        if (op === "del") {
          const \uC9C0\uC6B8\uAC83 = fixed.find((f) => f.id === it.id);
          fixed = fixed.filter((f) => f.id !== it.id);
          const \uBE80\uC904 = {};
          if (\uC9C0\uC6B8\uAC83 && \uC9C0\uC6B8\uAC83.every !== "w" && isMonth(\uC9C0\uC6B8\uAC83.from) && \uC9C0\uC6B8\uAC83.from >= curMonth()) {
            const months = (await get(K.months) || []).filter((m) => m >= \uC9C0\uC6B8\uAC83.from);
            for (const m of months) {
              const list = await get(K.tx(m)) || [];
              const \uB0A8\uAE38 = list.filter((t) => !(t && t.fx === \uC9C0\uC6B8\uAC83.id));
              if (\uB0A8\uAE38.length !== list.length) {
                \uBE80\uC904[m] = list.filter((t) => t && t.fx === \uC9C0\uC6B8\uAC83.id);
                await saveMonth(K, m, \uB0A8\uAE38);
              }
            }
          }
          if (\uC9C0\uC6B8\uAC83) await set(K.undoFx, { id: \uC9C0\uC6B8\uAC83.id, item: \uC9C0\uC6B8\uAC83, rows: \uBE80\uC904, at: Date.now() });
        } else if (op === "restore") {
          const u = await get(K.undoFx);
          if (!u || u.id !== it.id || Date.now() - Number(u.at || 0) > 10 * 6e4) {
            return res.status(410).json({ ok: false, err: "\uB418\uB3CC\uB9B4 \uC218 \uC788\uB294 \uC2DC\uAC04\uC774 \uC9C0\uB0AC\uC5B4\uC694." });
          }
          if (!fixed.some((f) => f.id === u.id)) fixed = fixed.concat([u.item]);
          for (const m of Object.keys(u.rows || {})) {
            const list = await get(K.tx(m)) || [];
            const \uC788\uB294 = new Set(list.map((x) => x && x.id));
            await saveMonth(K, m, list.concat((u.rows[m] || []).filter((x) => x && !\uC788\uB294.has(x.id))));
          }
          await del(K.undoFx);
        } else if (op === "toggle") {
          const \uC624\uB2980 = today10();
          const \uC5B4\uC81C0 = new Date(Date.parse(\uC624\uB2980 + "T00:00:00Z") - 864e5).toISOString().slice(0, 10);
          fixed = fixed.map((f) => {
            if (f.id !== it.id) return f;
            const \uB04C\uAE4C = typeof it.want === "boolean" ? it.want : !f.off;
            if (\uB04C\uAE4C === !!f.off) return f;
            if (\uB04C\uAE4C) return Object.assign({}, f, { off: true, offAt: \uC624\uB2980 });
            const \uAE30\uAC04 = \uBA48\uCD98\uAE30\uAC04(f.pauses);
            const \uB048\uB0A0 = \uB0A0\uBAA8\uC591ISO.test(String(f.offAt || "")) ? f.offAt : (isMonth(f.from) ? f.from : "2000-01") + "-01";
            if (\uB048\uB0A0 <= \uC5B4\uC81C0) \uAE30\uAC04.push({ from: \uB048\uB0A0, to: \uC5B4\uC81C0 });
            const \uCF20\uAC83 = Object.assign({}, f, { off: false, pauses: \uAE30\uAC04.slice(-24) });
            delete \uCF20\uAC83.offAt;
            delete \uCF20\uAC83.done;
            delete \uCF20\uAC83.doneAt;
            return \uCF20\uAC83;
          });
        } else if (op === "done") {
          const \uC624\uB2980 = today10();
          const \uC5B4\uC81C0 = new Date(Date.parse(\uC624\uB2980 + "T00:00:00Z") - 864e5).toISOString().slice(0, 10);
          fixed = fixed.map((f) => {
            if (f.id !== it.id) return f;
            const \uB05D\uB0BC\uAE4C = typeof it.want === "boolean" ? it.want : !f.done;
            if (\uB05D\uB0BC\uAE4C === !!f.done) return f;
            if (\uB05D\uB0BC\uAE4C) {
              const \uB048\uB0A0 = f.off && \uB0A0\uBAA8\uC591ISO.test(String(f.offAt || "")) ? f.offAt : \uC624\uB2980;
              return Object.assign({}, f, { off: true, offAt: \uB048\uB0A0, done: true, doneAt: \uC624\uB2980 });
            }
            const \uAE30\uAC04 = \uBA48\uCD98\uAE30\uAC04(f.pauses);
            const \uB0A0\uD6C4\uBCF4 = [f.offAt, f.doneAt].filter((x) => \uB0A0\uBAA8\uC591ISO.test(String(x || ""))).sort();
            const \uB05D\uB0B8\uB0A0 = \uB0A0\uD6C4\uBCF4.length ? \uB0A0\uD6C4\uBCF4[0] : (isMonth(f.from) ? f.from : "2000-01") + "-01";
            if (\uB05D\uB0B8\uB0A0 <= \uC5B4\uC81C0) \uAE30\uAC04.push({ from: \uB05D\uB0B8\uB0A0, to: \uC5B4\uC81C0 });
            const \uD47C\uAC83 = Object.assign({}, f, { off: false, pauses: \uAE30\uAC04.slice(-24) });
            delete \uD47C\uAC83.offAt;
            delete \uD47C\uAC83.done;
            delete \uD47C\uAC83.doneAt;
            return \uD47C\uAC83;
          });
        } else {
          if (op !== "edit") {
            const \uB9C9\uD798 = await \uC801\uC744\uC218\uC788\uB098();
            if (\uB9C9\uD798) return res.status(402).json(\uB9C9\uD798);
          }
          if (op === "edit") {
            const \uC61B\uAC83 = fixed.find((f) => f.id === it.id);
            if (\uC61B\uAC83) it = Object.assign({}, \uC61B\uAC83, item || {});
          }
          const name = clean(it.name, 40);
          const amt = money(it.amt);
          if (!name) return res.status(400).json({ ok: false, err: "\uD56D\uBAA9 \uC774\uB984\uC744 \uB123\uC5B4 \uC8FC\uC138\uC694." });
          if (amt <= 0) return res.status(400).json({ ok: false, err: "\uAE08\uC561\uC744 \uB123\uC5B4 \uC8FC\uC138\uC694." });
          const rec = {
            id: it.id || newId(),
            name,
            amt,
            day: Math.min(Math.max(Number(it.day) || 1, 1), 31),
            kind: it.kind === "in" ? "in" : "out",
            cat: clean(it.cat, 20),
            pay: clean(it.pay, 20),
            from: isMonth(it.from) ? it.from : curMonth(),
            to: isMonth(it.to) ? it.to : "",
            off: !!it.off,
            /* ⛔ 잠시 멈춤 표시 둘을 **고칠 때도 잇는다.** 안 이으면 멈춘 채로 금액만 고쳐도 끈 날이 사라져, 켤 때 멈춘 달이 되살아난다 */
            offAt: it.off && \uB0A0\uBAA8\uC591ISO.test(String(it.offAt || "")) ? it.offAt : void 0,
            /* ✅ 완납 표시도 **고칠 때 잇는다** (2026-09-22). 안 이으면 다 갚아 둔 할부의 금액만 고쳐도
               완납이 풀려 「다 갚은 것」에서 빠지고 예정에 되살아난다 (위 op:'done' 주석). */
            done: it.done === true ? true : void 0,
            doneAt: it.done === true && \uB0A0\uBAA8\uC591ISO.test(String(it.doneAt || "")) ? it.doneAt : void 0,
            /* ⛔ 앞날까지 멈춘 기간을 보내 청구를 미리 지우지 못하게 **오늘까지만** 받는다 (교차검증 2026-09-15) */
            pauses: \uBA48\uCD98\uAE30\uAC04(it.pauses).filter((p) => p.from <= today10()).map((p) => ({ from: p.from, to: p.to > today10() ? today10() : p.to })),
            /* 종류 — 할부·대출·보험·구독·카드값을 따로 모아 보기 위한 꼬리표.
               저장 모양은 다 같고 보는 방법만 갈라진다. 그래야 종류가 늘어도 코드가 안 는다. */
            type: TYPES.includes(it.type) ? it.type : "etc",
            /* 회사 운영에 드는 돈인가 (사장님 지시 2026-08-06).
               ⛔ 종류(type)와는 **다른 축**이다. Vercel Pro 는 「구독」이면서 「회사 것」이다.
                  한 축에 욱여넣으면 둘 중 하나는 못 보게 된다. 그래서 표시를 따로 둔다.
               ⛔ 여기서 짐작하지 않는다. 화면이 분류를 보고 미리 켜 두고(bizOf),
                  손님이 고친 것이 그대로 여기 실려 온다. 서버가 또 짐작하면 둘이 싸운다. */
            biz: !!it.biz,
            memo: clean(it.memo, 80),
            // 이율·보장내용·상품명처럼 한 줄로 적어 두는 것
            /* 주기 — 'y' 면 한 해에 한 번(도메인처럼, mon 이 그 달).
               'w' 면 **주마다**(주정헌금처럼, wd 가 요일 0=일 … 6=토).
               'n' 면 **N개월마다**(유튜브 3개월 선결제처럼, n 이 개월수).
               매주짜리는 day 를 안 쓴다 — 며칠인지가 아니라 무슨 요일인지로 정해진다. */
            every: ["y", "w", "n"].includes(it.every) ? it.every : "m",
            mon: Math.min(Math.max(Number(it.mon) || 1, 1), 12),
            wd: Math.min(Math.max(Number(it.wd) || 0, 0), 6),
            /* ⛔ N개월마다는 **시작한 달(from)이 기준점**이다. 2 미만이면 매달과 같은 말이라
                  아예 'm' 으로 떨어뜨린다 — 뜻은 같은데 저장 모양만 둘이면 나중에 헷갈린다. */
            n: Math.min(Math.max(Number(it.n) || 2, 2), 60),
            // 비정기 — 때 되면 하는 것. 저절로 적히지 않고 목록에만 남는다.
            irr: !!it.irr,
            last: isDate(it.last) ? it.last : "",
            // 지난번에 한 날
            /* 십일조 적을 때 같이 적기 — 참/거짓을 **고르셨을 때만** 담는다. 비워 두면 기본 규칙(십일조랑같이)을 따른다 */
            withTithe: it.withTithe === true ? true : it.withTithe === false ? false : void 0
          };
          if (it.inst && (money(it.inst.total) > 0 || Number(it.inst.months) > 0)) {
            const rate = Number(String(it.inst.rate == null ? "" : it.inst.rate).replace(/[^\d.]/g, ""));
            rec.inst = {
              total: money(it.inst.total),
              months: Math.min(Math.max(Number(it.inst.months) || 0, 0), 60),
              rate: rate > 0 ? Math.min(Math.round(rate * 1e3) / 1e3, 60) : 0,
              first: money(it.inst.first)
            };
          }
          if (rec.type === "loan") {
            const \uC61B = op === "edit" ? fixed.find((f) => f.id === rec.id) : null;
            const L = it.loan || \uC61B && \uC61B.loan || null;
            if (L) {
              const rate = Number(String(L.rate == null ? "" : L.rate).replace(/[^\d.]/g, ""));
              rec.loan = {
                principal: money(L.principal),
                rate: rate > 0 ? Math.min(Math.round(rate * 1e3) / 1e3, 60) : 0,
                start: isDate(L.start) ? L.start : "",
                end: isDate(L.end) ? L.end : "",
                way: L.way === "amort" ? "amort" : "int"
              };
              if (!rec.loan.principal && !rec.loan.rate && !rec.loan.start && !rec.loan.end) delete rec.loan;
            }
            const \uCCAB\uB2EC = \uB300\uCD9C\uCCAB\uB2EC(rec);
            const \uC61B\uCCAB\uB2EC = \uB300\uCD9C\uCCAB\uB2EC(\uC61B);
            if (\uCCAB\uB2EC && \uCCAB\uB2EC > rec.from) rec.from = \uCCAB\uB2EC;
            else if (\uCCAB\uB2EC && \uC61B\uCCAB\uB2EC && rec.from === \uC61B\uCCAB\uB2EC && \uCCAB\uB2EC < rec.from) {
              rec.from = \uCCAB\uB2EC > curMonth() ? \uCCAB\uB2EC : curMonth();
            }
          }
          if (it.once && !isDate(it.date)) {
            rec.once = true;
            rec.every = "m";
          }
          if (it.once && isDate(it.date)) {
            rec.once = true;
            rec.from = it.date.slice(0, 7);
            rec.to = rec.from;
            rec.day = Number(it.date.slice(8, 10));
            rec.every = "m";
          }
          if (op === "edit") {
            const \uACE0\uCE58\uAE30\uC804 = fixed.find((f) => f.id === rec.id);
            if (\uACE0\uCE58\uAE30\uC804) await \uC801\uD78C\uC904\uB530\uB77C\uACE0\uCE58\uAE30(K, \uACE0\uCE58\uAE30\uC804, rec);
          }
          fixed = op === "edit" ? fixed.map((f) => f.id === rec.id ? rec : f) : fixed.some((f) => f.id === rec.id) ? fixed : fixed.concat([rec]);
        }
        await set(K.fixed, fixed);
        await incr(K.rev);
        return sendMonth(isMonth(it.viewM) ? it.viewM : curMonth());
      }
      if (r === "cfg") {
        if (req.method === "GET") return res.status(200).json({ ok: true, cfg: await getCfg(K) });
        const body = (req.body || {}).cfg || {};
        const cfg = await getCfg(K);
        if (body.opening !== void 0) cfg.opening = money(body.opening);
        if (body.budget !== void 0) cfg.budget = money(body.budget);
        if (isMonth(body.openingMonth)) cfg.openingMonth = body.openingMonth;
        if (body.theme !== void 0) cfg.theme = slug(body.theme, 16) || "lime";
        if (body.font !== void 0) cfg.font = slug(body.font, 16) || "free";
        if (body.stamp !== void 0) cfg.stamp = slug(body.stamp, 16) || "heart";
        if (body.zoom !== void 0) cfg.zoom = Math.min(1.8, Math.max(1, Number(body.zoom) || 1.45));
        if (body.hold) {
          const \uC61B = cfg.hold || {};
          const \uC0C8\uAC12 = money(body.hold.have);
          const \uB2E4\uC2DC\uCC0D\uAE30 = !!body.hold.stamp || \uC0C8\uAC12 !== money(\uC61B.have) || !\uC61B.haveAt;
          cfg.hold = {
            on: !!body.hold.on,
            have: \uC0C8\uAC12,
            haveAt: \uB2E4\uC2DC\uCC0D\uAE30 ? Date.now() : Number(\uC61B.haveAt),
            note: clean(body.hold.note, 40),
            goal: Math.min(60, Math.max(1, Number(body.hold.goal) || cfg.hold && cfg.hold.goal || 3))
            // ⛔ 화면(max=60)과 같아야 한다 · 기본 3개월
          };
        }
        if (body.fx !== void 0) cfg.fx = slug(body.fx, 16) || "none";
        if (body.cats) {
          cfg.cats = {
            out: (body.cats.out || cfg.cats.out).map((s) => clean(s, 20)).filter(Boolean).slice(0, 40),
            in: (body.cats.in || cfg.cats.in).map((s) => clean(s, 20)).filter(Boolean).slice(0, 40)
          };
        }
        if (body.pays) cfg.pays = body.pays.map((s) => clean(s, 20)).filter(Boolean).filter((s, i, a) => a.indexOf(s) === i).slice(0, 20);
        if (Array.isArray(body.stickers)) {
          cfg.stickers = body.stickers.map((s) => clean(s, 8)).filter(Boolean).slice(0, 24);
        }
        if (body.catManual !== void 0) cfg.catManual = !!body.catManual;
        if (Array.isArray(body.cards)) {
          const \uC61B\uCE74\uB4DC = Array.isArray(cfg.cards) ? cfg.cards : [];
          cfg.cards = body.cards.slice(0, 6).map((c, i) => ({
            name: clean(c.name, 20),
            pay: clean(c.pay, 20) || clean(c.name, 20),
            also: (Array.isArray(c.also) ? c.also : (\uC61B\uCE74\uB4DC.find((o) => o && o.name === clean(c.name, 20)) || (body.cards.length === \uC61B\uCE74\uB4DC.length ? \uC61B\uCE74\uB4DC[i] : null) || {}).also || []).map((x) => clean(x, 20)).filter(Boolean).slice(0, 6),
            close: Math.min(Math.max(Number(c.close) || 26, 1), 28),
            payday: Math.min(Math.max(Number(c.payday) || 10, 1), 28)
          })).filter((c) => c.name);
        }
        if (body.skipCats) cfg.skipCats = body.skipCats.map((s) => clean(s, 20)).filter(Boolean).slice(0, 20);
        if (body.skipFixed !== void 0) cfg.skipFixed = !!body.skipFixed;
        if (body.titheOn !== void 0) cfg.titheOn = !!body.titheOn;
        await set(K.cfg, cfg);
        if (isMonth((req.body || {}).viewM)) return sendMonth(req.body.viewM);
        return res.status(200).json(await withRev({ ok: true, cfg }));
      }
      if (r === "use") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        const b = req.body || {};
        const key = clean(b.key, 40);
        if (!key) return res.status(400).json({ ok: false, err: "\uBB34\uC5C7\uC5D0 \uB300\uD55C \uB2F5\uC778\uC9C0 \uC5C6\uC2B5\uB2C8\uB2E4." });
        const map = await get(K.use) || {};
        if (b.v === "clear") delete map[key];
        else {
          map[key] = {
            v: ["good", "meh", "no"].includes(b.v) ? b.v : "meh",
            name: clean(b.name, 40),
            at: today10(),
            ask: money(b.ask)
          };
        }
        await set(K.use, map);
        return sendMonth(isMonth(b.viewM) ? b.viewM : curMonth());
      }
      if (r === "import") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        const \uB9C9\uD798 = await \uC801\uC744\uC218\uC788\uB098();
        if (\uB9C9\uD798) return res.status(402).json(\uB9C9\uD798);
        const rows = ((req.body || {}).rows || []).slice(0, 3e3);
        if (!rows.length) return res.status(400).json({ ok: false, err: "\uB123\uC744 \uC904\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." });
        const byMonth = {};
        let ok = 0, skip = 0;
        rows.forEach((t) => {
          if (!isDate(t.d)) {
            skip++;
            return;
          }
          const amt = money(t.amt);
          if (amt <= 0) {
            skip++;
            return;
          }
          const m = t.d.slice(0, 7);
          (byMonth[m] = byMonth[m] || []).push({
            id: newId(),
            d: t.d,
            k: t.k === "in" ? "in" : t.k === "mv" ? "mv" : "out",
            amt,
            cat: clean(t.cat, 20),
            pay: clean(t.pay, 20),
            memo: clean(t.memo, 80),
            st: "",
            ts: Date.now()
          });
          ok++;
        });
        const ms = Object.keys(byMonth).sort();
        for (const m of ms) {
          const list = await get(K.tx(m)) || [];
          await saveMonth(K, m, list.concat(byMonth[m]));
        }
        const payload = await withRev(await monthPayload(K, ms[ms.length - 1] || curMonth()));
        return res.status(200).json(Object.assign(payload, { added: ok, skipped: skip, months: payload.months }));
      }
      if (r === "bill") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        const b = req.body || {};
        const name = clean(b.name, 20);
        if (!name || !isDate(b.d)) return res.status(400).json({ ok: false, err: "\uC5B4\uB290 \uCE74\uB4DC\uC758 \uC5B8\uC81C \uAC83\uC778\uC9C0 \uC5C6\uC2B5\uB2C8\uB2E4." });
        const bills = await get(K.bills) || {};
        const amt = money(b.amt);
        if (amt > 0) bills[name + "|" + b.d] = amt;
        else delete bills[name + "|" + b.d];
        await set(K.bills, bills);
        return sendMonth(isMonth(b.viewM) ? b.viewM : curMonth());
      }
      if (r === "wipe" || r === "purge") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        if (String((req.body || {}).sure || "") !== "\uC9C0\uC6B0\uAE30") {
          return res.status(400).json({ ok: false, err: "\u300C\uC9C0\uC6B0\uAE30\u300D\uB77C\uACE0 \uC801\uC5B4 \uC8FC\uC138\uC694." });
        }
        const months = await get(K.months) || [];
        const keysToGo = [
          K.cfg,
          K.months,
          K.fixed,
          K.rev,
          K.nsBest,
          K.nsRun,
          K.nsLog,
          K.use,
          K.bills,
          K.drev,
          K.checks,
          K.undoFx
        ];
        months.forEach((m) => keysToGo.push(K.tx(m), K.sum(m), K.mat(m), K.note(m)));
        const from = (await getCfg(K)).openingMonth || curMonth();
        const now = curMonth();
        for (let m = from, i = 0; m <= now && i < 600; m = shiftM(m, 1), i++) {
          keysToGo.push(K.tx(m), K.sum(m), K.mat(m), K.note(m));
        }
        for (const key of [...new Set(keysToGo)]) await del(key);
        if (r === "purge") clear(res);
        return res.status(200).json({ ok: true, out: r === "purge" });
      }
      if (r === "fx") return res.status(200).json(Object.assign({ ok: true }, await usdRate()));
      if (r === "checks") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        const b = req.body || {};
        const \uC774\uB2EC = isMonth(b.viewM) ? b.viewM : curMonth();
        const raw = await get(K.checks);
        let list = Array.isArray(raw) ? raw.slice() : [];
        if (b.op === "add") {
          const t = clean(b.text, 60);
          if (!t) return res.status(400).json({ ok: false, err: "\uC801\uC73C\uC2E4 \uB0B4\uC6A9\uC744 \uB123\uC5B4 \uC8FC\uC138\uC694." });
          if (list.length >= 60) {
            return res.status(400).json({ ok: false, err: "\uCCB4\uD06C\uD560 \uAC83\uC740 60\uAC1C\uAE4C\uC9C0\uC608\uC694. \uB2E4 \uD55C \uAC83\uC744 \uC9C0\uC6CC \uC8FC\uC138\uC694." });
          }
          list.unshift({ id: newId(), t, d: false, at: today10() });
        } else if (b.op === "toggle") {
          const it = list.find((x) => x && x.id === b.id);
          if (!it) return res.status(404).json({ ok: false, err: "\uADF8 \uC904\uC744 \uBABB \uCC3E\uC558\uC5B4\uC694." });
          it.d = !it.d;
          it.doneAt = it.d ? today10() : "";
        } else if (b.op === "del") {
          const \uC804 = list.length;
          list = list.filter((x) => x && x.id !== b.id);
          if (list.length === \uC804) return res.status(404).json({ ok: false, err: "\uADF8 \uC904\uC744 \uBABB \uCC3E\uC558\uC5B4\uC694." });
        } else {
          return res.status(400).json({ ok: false, err: "\uBAA8\uB974\uB294 \uC694\uCCAD\uC774\uC5D0\uC694." });
        }
        await set(K.checks, list);
        return sendMonth(\uC774\uB2EC);
      }
      if (r === "reels") {
        const \uC774\uC6A9\uAD8C2 = await licOf(ws);
        const \uBAA9\uB85D = await get(REELS) || [];
        const \uC624\uB298 = today10();
        let \uBC14\uB01C = false;
        const \uC190\uC9C8 = (x) => {
          if (!x) return;
          if (x.warn && !x.warn.fixed && x.warn.until < \uC624\uB298 && !x.off) {
            x.off = true;
            x.partner = false;
            x.warn.gone = \uC624\uB298;
            \uBC14\uB01C = true;
          }
        };
        const \uBC16\uC73C\uB85C = (x) => ({
          ws: x.ws,
          at: x.at || "",
          code: x.off ? "" : x.code || "",
          until: x.until || "",
          items: x.off ? {} : x.items || \uAFB8\uB7EC\uBBF8(),
          partner: !!x.partner && !x.off,
          off: !!x.off,
          n: (Array.isArray(x.urls) ? x.urls : []).length,
          urls: (Array.isArray(x.urls) ? x.urls : []).slice(-5),
          /* 대가 표시를 확인하고 보내신 것이 몇 건인가 — 사장님이 한눈에 보시라고 */
          vows: (Array.isArray(x.urls) ? x.urls : []).filter((u) => u.vow).length,
          warn: x.warn ? { at: x.warn.at, until: x.warn.until, fixed: x.warn.fixed || "", gone: x.warn.gone || "" } : null,
          keepUntil: ""
          // 한 번 드리고 끝이라 지킬 기한이 없다
        });
        const \uC790\uB9AC\uCC2C\uC218 = () => \uBAA9\uB85D.filter((x) => !x.off).length;
        const \uAE00 = Object.assign({}, REELS_TEXT_\uAE30\uBCF8, await get(REELS_TEXT) || {});
        const \uC124\uC815 = await get(REELS_CFG) || {};
        const \uBC1B\uB294\uC911 = () => \uC124\uC815.off !== true;
        const \uB2F5 = async () => {
          const \uB0B4\uAC832 = \uBAA9\uB85D.find((x) => x.ws === ws);
          \uC190\uC9C8(\uB0B4\uAC832);
          if (\uC774\uC6A9\uAD8C2.owner) \uBAA9\uB85D.forEach(\uC190\uC9C8);
          if (\uBC14\uB01C) {
            await set(REELS, \uBAA9\uB85D);
            \uBC14\uB01C = false;
          }
          return res.status(200).json({
            ok: true,
            open: \uBC1B\uB294\uC911(),
            n: \uC790\uB9AC\uCC2C\uC218(),
            paid: !!\uC774\uC6A9\uAD8C2.paid,
            owner: !!\uC774\uC6A9\uAD8C2.owner,
            gift: REELS_GIFT,
            text: \uAE00,
            days: REELS_DAYS,
            up: REELS_UP,
            today: \uC624\uB298,
            mine: \uB0B4\uAC832 ? \uBC16\uC73C\uB85C(\uB0B4\uAC832) : null,
            list: \uC774\uC6A9\uAD8C2.owner ? \uBAA9\uB85D.map(\uBC16\uC73C\uB85C).sort((a, b) => String(b.at).localeCompare(String(a.at))) : void 0
          });
        };
        if (req.method !== "POST") return await \uB2F5();
        const body = req.body || {};
        if (body.op === "open") {
          if (!\uC774\uC6A9\uAD8C2.owner) return res.status(403).json({ ok: false, err: "\uC0AC\uC7A5\uB2D8\uB9CC \uD558\uC2E4 \uC218 \uC788\uC5B4\uC694" });
          \uC124\uC815.off = body.on === false;
          await set(REELS_CFG, Object.assign({}, \uC124\uC815, { off: \uC124\uC815.off }));
          return await \uB2F5();
        }
        if (body.op === "text") {
          if (!\uC774\uC6A9\uAD8C2.owner) return res.status(403).json({ ok: false, err: "\uC0AC\uC7A5\uB2D8\uB9CC \uD558\uC2E4 \uC218 \uC788\uC5B4\uC694" });
          const \uC0C8\uAC83 = {};
          Object.keys(REELS_TEXT_\uAE30\uBCF8).forEach((k) => {
            if (typeof body[k] !== "string") return;
            const v = String(body[k]).replace(/\r/g, "").replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, " ").trim().slice(0, 900);
            if (v) \uC0C8\uAC83[k] = v;
          });
          await set(REELS_TEXT, \uC0C8\uAC83);
          Object.assign(\uAE00, REELS_TEXT_\uAE30\uBCF8, \uC0C8\uAC83);
          return await \uB2F5();
        }
        if (body.op === "warn") {
          if (!\uC774\uC6A9\uAD8C2.owner) return res.status(403).json({ ok: false, err: "\uC0AC\uC7A5\uB2D8\uB9CC \uD558\uC2E4 \uC218 \uC788\uC5B4\uC694" });
          const \uAC83 = \uBAA9\uB85D.find((x) => x.ws === body.ws);
          if (!\uAC83) return res.status(404).json({ ok: false, err: "\uADF8\uB7F0 \uC2E0\uCCAD\uC774 \uC5C6\uC5B4\uC694" });
          if (body.on === false) {
            delete \uAC83.warn;
          } else {
            \uAC83.warn = { at: \uC624\uB298, until: \uBA70\uCE60\uB4A4(REELS_FIX_DAYS) };
            \uAC83.off = false;
          }
          await set(REELS, \uBAA9\uB85D);
          return await \uB2F5();
        }
        if (body.op === "fixed") {
          const \uB0B4\uAC830 = \uBAA9\uB85D.find((x) => x.ws === ws);
          if (!\uB0B4\uAC830 || !\uB0B4\uAC830.warn) return res.status(400).json({ ok: false, err: "\uACE0\uCE60 \uAC83\uC774 \uC5C6\uC5B4\uC694" });
          \uB0B4\uAC830.warn.fixed = \uC624\uB298;
          \uB0B4\uAC830.off = false;
          await set(REELS, \uBAA9\uB85D);
          return await \uB2F5();
        }
        if (body.op === "off") {
          if (!\uC774\uC6A9\uAD8C2.owner) return res.status(403).json({ ok: false, err: "\uC0AC\uC7A5\uB2D8\uB9CC \uD558\uC2E4 \uC218 \uC788\uC5B4\uC694" });
          const \uAC83 = \uBAA9\uB85D.find((x) => x.ws === body.ws);
          if (!\uAC83) return res.status(404).json({ ok: false, err: "\uADF8\uB7F0 \uC2E0\uCCAD\uC774 \uC5C6\uC5B4\uC694" });
          \uAC83.off = !!body.on;
          if (\uAC83.off) \uAC83.partner = false;
          else if ((Array.isArray(\uAC83.urls) ? \uAC83.urls : []).length >= REELS_UP) \uAC83.partner = true;
          await set(REELS, \uBAA9\uB85D);
          return await \uB2F5();
        }
        if (\uC774\uC6A9\uAD8C2.owner) return res.status(400).json({ ok: false, err: "\uC0AC\uC7A5\uB2D8 \uC7A5\uBD80\uC5D0\uB294 \uC2E0\uCCAD\uD560 \uAC83\uC774 \uC5C6\uC5B4\uC694" });
        if (!\uC774\uC6A9\uAD8C2.paid) return res.status(400).json({ ok: false, err: "\uC774\uC6A9\uAD8C\uC744 \uC0AC\uC2E0 \uBD84\uB9CC \uC2E0\uCCAD\uD558\uC2E4 \uC218 \uC788\uC5B4\uC694" });
        if (body.vow !== true) {
          return res.status(400).json({ ok: false, err: "\uC57D\uC18D \uC14B\uC9F8 \uC904\uC744 \uB123\uC73C\uC168\uB294\uC9C0 \uB20C\uB7EC \uC8FC\uC138\uC694" });
        }
        const url = clean(body.url, 200);
        if (url.slice(0, 8) !== "https://" || url.length < 14 || / /.test(url)) {
          return res.status(400).json({ ok: false, err: "\uC601\uC0C1 \uC8FC\uC18C\uB97C https:// \uB85C \uC2DC\uC791\uD558\uAC8C \uB123\uC5B4 \uC8FC\uC138\uC694" });
        }
        const \uC9D1 = url.slice(8).split("/")[0].split("?")[0].toLowerCase();
        const \uB9DE\uB294\uC9D1 = REELS_HOSTS.some((h) => \uC9D1 === h || \uC9D1.endsWith("." + h));
        if (!\uB9DE\uB294\uC9D1) {
          return res.status(400).json({ ok: false, err: "\uC778\uC2A4\uD0C0 \xB7 \uD2F1\uD1A1 \xB7 \uC720\uD29C\uBE0C \xB7 \uB124\uC774\uBC84 \uBE14\uB85C\uADF8 \xB7 \uD2F0\uC2A4\uD1A0\uB9AC \xB7 \uBE0C\uB7F0\uCE58 \uC8FC\uC18C\uB97C \uBC1B\uC544\uC694" });
        }
        const \uC774\uBBF8 = \uBAA9\uB85D.some((x) => (Array.isArray(x.urls) ? x.urls : []).some((u) => u.u === url));
        if (\uC774\uBBF8) return res.status(400).json({ ok: false, err: "\uC774\uBBF8 \uB0B8 \uC601\uC0C1\uC774\uC5D0\uC694" });
        let \uB0B4\uAC83 = \uBAA9\uB85D.find((x) => x.ws === ws);
        if (\uB0B4\uAC83 && \uB0B4\uAC83.off) return res.status(400).json({ ok: false, err: "\uC9C0\uAE08\uC740 \uC2E0\uCCAD\uD558\uC2E4 \uC218 \uC5C6\uC5B4\uC694" });
        if (!\uB0B4\uAC83) {
          if (!\uBC1B\uB294\uC911()) return res.status(400).json({ ok: false, err: "\uC9C0\uAE08\uC740 \uBC1B\uACE0 \uC788\uC9C0 \uC54A\uC544\uC694" });
          \uB0B4\uAC83 = {
            ws,
            at: \uC624\uB298,
            urls: [],
            code: \uBC88\uD638\uB9CC\uB4E4\uAE30(),
            items: \uAFB8\uB7EC\uBBF8(),
            until: \uBA70\uCE60\uB4A4(REELS_DAYS),
            partner: false,
            off: false
          };
          \uBAA9\uB85D.push(\uB0B4\uAC83);
        }
        \uB0B4\uAC83.urls = (Array.isArray(\uB0B4\uAC83.urls) ? \uB0B4\uAC83.urls : []).concat([{ u: url, at: \uC624\uB298, vow: 1 }]);
        if (\uB0B4\uAC83.urls.length >= REELS_UP && !\uB0B4\uAC83.partner) \uB0B4\uAC83.partner = true;
        await set(REELS, \uBAA9\uB85D);
        return await \uB2F5();
      }
      if (r === "note") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        const body = req.body || {};
        const m = isMonth(body.m) ? body.m : curMonth();
        await set(K.note(m), clean(body.text, 120));
        return sendMonth(m);
      }
      if (r === "search") {
        const q = clean(req.query.q, 40).toLowerCase();
        if (!q) return res.status(200).json({ ok: true, q: "", rows: [], sum: { in: 0, out: 0 }, more: false });
        const months = await get(K.months) || [];
        const lists = await mget(months.map(K.tx));
        const rows = [];
        months.forEach((mm, i) => {
          (lists[i] || []).forEach((t) => {
            const hay = ((t.memo || "") + " " + (t.cat || "") + " " + (t.pay || "")).toLowerCase();
            if (hay.includes(q)) rows.push(t);
          });
        });
        rows.sort(byDate);
        return res.status(200).json({ ok: true, q, sum: tally(rows), more: rows.length > 300, total: rows.length, rows: rows.slice(0, 300) });
      }
      if (r === "dump") {
        const months = await get(K.months) || [];
        const single = [K.cfg, K.fixed, K.rev, K.nsBest, K.nsRun, K.nsLog, K.use, K.bills, K.checks];
        const per = months.flatMap((m) => [K.tx(m), K.sum(m), K.mat(m), K.note(m)]);
        const vals = await mget(single.concat(per));
        const kv = {};
        single.concat(per).forEach((k, i) => {
          if (vals[i] !== null && vals[i] !== void 0) kv[k] = vals[i];
        });
        const \uC790\uB8CC = {
          ok: true,
          \uC571: "\uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8",
          \uD310: 1,
          // 파일 모양이 바뀌면 올린다
          \uBC1B\uC740\uB0A0: today10(),
          \uB2EC: months,
          kv
        };
        try {
          const \uB0B4\uAC83 = await licOf(ws);
          const \uB3C4\uC7A52 = await \uB3C4\uC7A5\uB9CC\uB4E4\uAE30(\uB0B4\uAC83);
          if (\uB3C4\uC7A52) \uC790\uB8CC.\uC774\uC6A9\uAD8C = \uB3C4\uC7A52;
        } catch (e) {
        }
        if (String(req.query.as || "") === "book") {
          const html = buildBook(\uC790\uB8CC).replace("</body>", `<script type="application/json" id="lb-data">${JSON.stringify(\uC790\uB8CC).replace(/</g, "\\u003c")}<\/script>
</body>`);
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.status(200).send(html);
        }
        return res.status(200).json(\uC790\uB8CC);
      }
      if (r === "restore") {
        if (req.method !== "POST") return res.status(405).json({ ok: false });
        const body = req.body || {};
        const kv = body.kv;
        if (!kv || typeof kv !== "object") {
          return res.status(400).json({ ok: false, err: "\uC544\uC5E0\uC5B4\uAD7F\uD384\uC2A8\uC5D0\uC11C \uBC1B\uC740 \uD30C\uC77C\uC774 \uC544\uB2C8\uC5D0\uC694." });
        }
        const months = Array.isArray(body.\uB2EC) ? body.\uB2EC.filter(isMonth) : [];
        const pairs = [];
        const froms = /* @__PURE__ */ new Set();
        let dropped = 0;
        for (const [k, v] of Object.entries(kv)) {
          const m = /^lb:([A-Za-z0-9_]+):(.+)$/.exec(String(k));
          if (!m) {
            dropped++;
            continue;
          }
          froms.add(m[1]);
          pairs.push([`lb:${ws}:${m[2]}`, v]);
        }
        if (froms.size > 1) {
          return res.status(400).json({
            ok: false,
            err: "\uD55C \uD30C\uC77C\uC5D0 \uC7A5\uBD80\uAC00 \uC5EC\uB7EC \uAC1C \uC11E\uC5EC \uC788\uC5B4\uC694. \uBC1B\uC73C\uC2E0 \uADF8\uB300\uB85C\uC758 \uD30C\uC77C\uC744 \uB123\uC5B4 \uC8FC\uC138\uC694."
          });
        }
        if (!pairs.length) return res.status(400).json({ ok: false, err: "\uD30C\uC77C\uC5D0 \uC7A5\uBD80\uAC00 \uC5C6\uC5B4\uC694." });
        for (let i = 0; i < pairs.length; i += 50) await mset(pairs.slice(i, i + 50));
        if (months.length) await set(K.months, months.slice().sort());
        return res.status(200).json(await withRev({ ok: true, \uB418\uC0B4\uB9BC: pairs.length, \uAC74\uB108\uB700: dropped }));
      }
      if (r === "csv") {
        const months = await get(K.months) || [];
        let want = months;
        if (isMonth(req.query.m)) want = [req.query.m];
        else if (/^\d{4}$/.test(String(req.query.y || ""))) want = months.filter((m) => m.startsWith(req.query.y));
        const lists = await mget(want.map(K.tx));
        const rows = [["\uB0A0\uC9DC", "\uAD6C\uBD84", "\uBD84\uB958", "\uB0B4\uC6A9", "\uC218\uC785", "\uC9C0\uCD9C", "\uC62E\uAE40", "\uACB0\uC81C\uC218\uB2E8", "\uACE0\uC815"]];
        want.forEach((m, i) => {
          (lists[i] || []).slice().sort((a, b) => a.d < b.d ? -1 : a.d > b.d ? 1 : 0).forEach((t) => {
            rows.push([
              t.d,
              t.k === "in" ? "\uC218\uC785" : t.k === "mv" ? "\uC62E\uAE40" : "\uC9C0\uCD9C",
              t.cat || "",
              t.memo || "",
              t.k === "in" ? t.amt : "",
              t.k === "out" ? t.amt : "",
              t.k === "mv" ? t.amt : "",
              t.pay || "",
              t.fx ? "\uACE0\uC815" : ""
            ]);
          });
        });
        const csv = "\uFEFF" + rows.map((row) => row.map((c) => {
          const s = String(c == null ? "" : c);
          return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
        }).join(",")).join("\r\n");
        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader("Content-Disposition", 'attachment; filename="ledger-' + (req.query.m || req.query.y || "all") + '.csv"');
        return res.status(200).send(csv);
      }
      return res.status(404).json({ ok: false, err: "unknown route" });
    } catch (e) {
      const status = e && e.code === "NO_STORE" ? 503 : 500;
      return res.status(status).json({ ok: false, err: e && e.message || "\uC11C\uBC84 \uC624\uB958" });
    }
  }

  // keep/sw-entry.js
  var \uD310 = "cfd688ca52c9";
  var \uB2F4\uC744\uAC83 = define_KEEP_PRECACHE_default;
  var \uD1B5 = "igp-keep-" + \uD310;
  self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(\uD1B5).then((c) => c.addAll(\uB2F4\uC744\uAC83)).then(() => self.skipWaiting()));
  });
  self.addEventListener("activate", (e) => {
    e.waitUntil((async () => {
      for (const k of await caches.keys()) if (k !== \uD1B5) await caches.delete(k);
      await self.clients.claim();
    })());
  });
  function \uD30C\uC77C\uB85C(p) {
    if (p === "/" || p === "/ui2" || p === "/index" || p === "/landing") return "/index.html";
    if (p === "/terms" || p === "/privacy") return p + ".html";
    return p;
  }
  self.addEventListener("fetch", (e) => {
    const u = new URL(e.request.url);
    if (u.origin !== self.location.origin) return;
    if (u.pathname.startsWith("/api/")) {
      e.respondWith(\uC11C\uBC84(e.request, u));
      return;
    }
    e.respondWith((async () => {
      const \uB2F4\uAE34 = await caches.match(\uD30C\uC77C\uB85C(u.pathname), { ignoreSearch: true, cacheName: \uD1B5 });
      if (\uB2F4\uAE34) return \uB2F4\uAE34;
      try {
        return await fetch(e.request);
      } catch (x) {
        return await caches.match("/index.html", { cacheName: \uD1B5 }) || Response.error();
      }
    })());
  });
  function \uC751\uB2F5\uD2C0() {
    const r = { code: 200, headers: { "Content-Type": "application/json; charset=utf-8" }, body: "" };
    const res = {
      status(c) {
        r.code = c;
        return res;
      },
      setHeader(k, v) {
        r.headers[k] = String(v);
        return res;
      },
      json(o) {
        r.headers["Content-Type"] = "application/json; charset=utf-8";
        r.body = JSON.stringify(o);
        return res;
      },
      send(s) {
        r.body = typeof s === "string" ? s : JSON.stringify(s);
        return res;
      },
      end(s) {
        if (s) r.body = String(s);
        return res;
      }
    };
    return { r, res };
  }
  var json = (o, code = 200) => new Response(JSON.stringify(o), { status: code, headers: { "Content-Type": "application/json; charset=utf-8" } });
  async function \uC11C\uBC84(request, u) {
    const \uC774\uB984 = u.pathname.replace(/^\/api\//, "").replace(/\.js$/, "");
    const query = Object.fromEntries(u.searchParams.entries());
    const r = String(query.r || "").toLowerCase();
    let body = null;
    if (request.method !== "GET" && request.method !== "HEAD") {
      try {
        body = await request.json();
      } catch (e) {
        body = {};
      }
    }
    if (\uC774\uB984 === "kauth" || \uC774\uB984 === "gauth") return Response.redirect("/", 302);
    if (\uC774\uB984 === "pay") {
      if (r === "price") return json({ ok: true, price: 15e3, list: 15e3, early: false, earlyLeft: 0, max: 0 });
      if (r === "state" || r === "recover") return json({ ok: true, lic: licView(await licOf()), pay: { on: false, why: "keep" } });
      return json({ ok: false, err: "\uACC4\uC18D \uC4F0\uAE30\uD310\uC5D0\uC11C\uB294 \uACB0\uC81C\uAC00 \uC5C6\uC5B4\uC694. \uC774\uC6A9\uAD8C\uC744 \uC0B0 \uACC4\uC815\uC758 \uBCF4\uAD00\uBCF8\uC744 \uBD88\uB7EC\uC640 \uC8FC\uC138\uC694." }, 400);
    }
    if (\uC774\uB984 !== "ledger") return json({ ok: false, err: "\uACC4\uC18D \uC4F0\uAE30\uD310\uC5D0 \uC5C6\uB294 \uAE30\uB2A5\uC774\uC5D0\uC694." }, 404);
    if (r === "restore" && body && body.\uC774\uC6A9\uAD8C) {
      const p = await \uB3C4\uC7A5\uD655\uC778(body.\uC774\uC6A9\uAD8C);
      if (p) await set(\uB3C4\uC7A5\uC790\uB9AC, { token: body.\uC774\uC6A9\uAD8C, at: (/* @__PURE__ */ new Date()).toISOString() });
    }
    const \uB3C4\uC7A52 = r === "dump" ? await get(\uB3C4\uC7A5\uC790\uB9AC) : null;
    const { r: \uACB0\uACFC, res } = \uC751\uB2F5\uD2C0();
    const req = { method: request.method, query, body, headers: { host: u.host, "x-forwarded-proto": u.protocol.replace(":", "") } };
    try {
      await handler(req, res);
    } catch (e) {
      return json({ ok: false, err: e && e.message || "\uACC4\uC18D \uC4F0\uAE30\uD310\uC5D0\uC11C \uBB38\uC81C\uAC00 \uC0DD\uACBC\uC5B4\uC694" }, 500);
    }
    if (\uACB0\uACFC.code === 402) \uACB0\uACFC.code = 403;
    if (\uB3C4\uC7A52 && \uB3C4\uC7A52.token && \uACB0\uACFC.code === 200) {
      if (/json/.test(\uACB0\uACFC.headers["Content-Type"])) {
        try {
          const o = JSON.parse(\uACB0\uACFC.body);
          o.\uC774\uC6A9\uAD8C = \uB3C4\uC7A52.token;
          \uACB0\uACFC.body = JSON.stringify(o);
        } catch (e) {
        }
      } else {
        \uACB0\uACFC.body = \uACB0\uACFC.body.replace(/(<script type="application\/json" id="lb-data">)([\s\S]*?)(<\/script>)/, (m, a, j, c) => {
          try {
            const o = JSON.parse(j);
            o.\uC774\uC6A9\uAD8C = \uB3C4\uC7A52.token;
            return a + JSON.stringify(o).replace(/</g, "\\u003c") + c;
          } catch (e) {
            return m;
          }
        });
      }
    }
    return new Response(\uACB0\uACFC.body, { status: \uACB0\uACFC.code, headers: \uACB0\uACFC.headers });
  }
})();
