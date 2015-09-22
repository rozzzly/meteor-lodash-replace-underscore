//lodash = this._;
//delete this._;

_underscoreBackup = {
    global: _,
    scope: this._
};

_ = lodash = require('lodash');
