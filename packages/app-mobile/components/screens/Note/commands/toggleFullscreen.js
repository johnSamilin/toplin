"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = exports.declaration = void 0;
const locale_1 = require("@joplin/lib/locale");
const eventManager_1 = require("@joplin/lib/eventManager");
exports.declaration = {
    name: 'togglefullscreen',
    label: () => (0, locale_1._)('Toggle fullscreen'),
    iconName: 'material fullscreen',
};
const runtime = () => {
    return {
        execute: async (_context) => {
            eventManager_1.default.emit(eventManager_1.EventName.ToggleFullscreen);
        },
    };
};
exports.runtime = runtime;
//# sourceMappingURL=toggleFullscreen.js.map