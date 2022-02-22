"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1180],{1180:(T,l,n)=>{n.r(l),n.d(l,{StatisticsModule:()=>S});var s=n(5362),u=n(9705),d=n(9808),h=n(4182),c=n(655),a=n(4090),t=n(9863),g=n(681);let y=(()=>{class e{constructor(i){this.db=i}getVocabularyCount(){return(0,c.mG)(this,void 0,void 0,function*(){return yield this.db.vocabulary.count()})}getVocabularyCountByPractiveLevel(i){return(0,c.mG)(this,void 0,void 0,function*(){return yield this.db.vocabulary.where("practiceLevel").equals(i).count()})}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(g.S))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=n(8140);let v=(()=>{class e{constructor(i,o){this.statisticsService=i,this.themeService=o,this.vocabularyCount=0,this.neverKnownOrPracticedCount=0,this.neverKnownOrPracticedPercent=0,this.atLeastOnceCount=0,this.atLeastOncePercent=0,this.onTheRightTackCount=0,this.onTheRightTackPercent=0,this.goodCount=0,this.goodPercent=0,this.veryGoodCount=0,this.veryGoodPercent=0}ionViewWillEnter(){return(0,c.mG)(this,void 0,void 0,function*(){this.themeService.overwriteStatusBarColor("#ffffff"),yield this.loadStatistics()})}loadStatistics(){return(0,c.mG)(this,void 0,void 0,function*(){this.vocabularyCount=yield this.statisticsService.getVocabularyCount(),this.neverKnownOrPracticedCount=yield this.statisticsService.getVocabularyCountByPractiveLevel(a.u.NeverKnownOrPracticed),this.neverKnownOrPracticedPercent=this.neverKnownOrPracticedCount/this.vocabularyCount*100,this.atLeastOnceCount=yield this.statisticsService.getVocabularyCountByPractiveLevel(a.u.AtLeastOnceKnown),this.atLeastOncePercent=this.atLeastOnceCount/this.vocabularyCount*100,this.onTheRightTackCount=yield this.statisticsService.getVocabularyCountByPractiveLevel(a.u.OnTheRightTrack),this.onTheRightTackPercent=this.onTheRightTackCount/this.vocabularyCount*100,this.goodCount=yield this.statisticsService.getVocabularyCountByPractiveLevel(a.u.Good),this.goodPercent=this.goodCount/this.vocabularyCount*100,this.veryGoodCount=yield this.statisticsService.getVocabularyCountByPractiveLevel(a.u.VeryGood),this.veryGoodPercent=this.veryGoodCount/this.vocabularyCount*100})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(y),t.Y36(p.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["satistics-page"]],decls:33,vars:33,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"content","ion-padding-start","ion-padding-end"],[2,"font-weight","bold"],[2,"margin-top","48px"],[3,"value"]],template:function(i,o){1&i&&(t.TgZ(0,"ion-header",0),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-title"),t._uU(3," Statistics "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(4,"ion-content",1),t.TgZ(5,"ion-header",2),t.TgZ(6,"ion-toolbar"),t.TgZ(7,"ion-title",3),t._uU(8,"Statistics"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t._UZ(10,"br"),t.TgZ(11,"p",5),t._uU(12),t.qZA(),t.TgZ(13,"p",6),t._uU(14),t.ALo(15,"number"),t.qZA(),t._UZ(16,"ion-progress-bar",7),t.TgZ(17,"p",6),t._uU(18),t.ALo(19,"number"),t.qZA(),t._UZ(20,"ion-progress-bar",7),t.TgZ(21,"p",6),t._uU(22),t.ALo(23,"number"),t.qZA(),t._UZ(24,"ion-progress-bar",7),t.TgZ(25,"p",6),t._uU(26),t.ALo(27,"number"),t.qZA(),t._UZ(28,"ion-progress-bar",7),t.TgZ(29,"p",6),t._uU(30),t.ALo(31,"number"),t.qZA(),t._UZ(32,"ion-progress-bar",7),t.qZA(),t.qZA()),2&i&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(8),t.hij("Total words: ",o.vocabularyCount,""),t.xp6(2),t.AsE("Never known or practiced: ",t.xi3(15,18,o.neverKnownOrPracticedPercent,"1.0-0"),"% (",o.neverKnownOrPracticedCount," words)"),t.xp6(2),t.Q6J("value",o.neverKnownOrPracticedPercent/100),t.xp6(2),t.AsE("Known at least once: ",t.xi3(19,21,o.atLeastOncePercent,"1.0-0"),"% (",o.atLeastOnceCount," words)"),t.xp6(2),t.Q6J("value",o.atLeastOncePercent/100),t.xp6(2),t.AsE("On the right track: ",t.xi3(23,24,o.onTheRightTackPercent,"1.0-0"),"% (",o.onTheRightTackCount," words)"),t.xp6(2),t.Q6J("value",o.onTheRightTackPercent/100),t.xp6(2),t.AsE("Good: ",t.xi3(27,27,o.goodPercent,"1.0-0"),"% (",o.goodCount," words)"),t.xp6(2),t.Q6J("value",o.goodPercent/100),t.xp6(2),t.AsE("Very good: ",t.xi3(31,30,o.veryGoodPercent,"1.0-0"),"% (",o.veryGoodCount," words)"),t.xp6(2),t.Q6J("value",o.veryGoodPercent/100))},directives:[s.Gu,s.sr,s.wd,s.W2,s.X7],pipes:[d.JJ],styles:[""]}),e})();const C=[{path:"",component:v}];let P=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(C)],u.Bz]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Pc,d.ez,h.u5,u.Bz.forChild([{path:"",component:v}]),P]]}),e})()}}]);