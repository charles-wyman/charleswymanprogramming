'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.art'));

  describe('art controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('artCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});