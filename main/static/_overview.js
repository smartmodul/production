class _CreateOverView{constructor(){this.createTable()}createTable(){$('<div class="container" style="width:100%;"><div class="row justify-content-center"><div class="col-" style="width:49%;"><div class="card" id="tCard"><div class="card-body"><div class="card-title  text-center" style="color:#828389; font-weight: bold;" data-i18n-key="maxCurrent">MAX CURRENT [A]</div><h3 class="card-text text-white text-center" style="font-weight: bold;" id="maxCurrent">-,-</h3></div></div></div><div class="col-" style="width:2%;"></div><div class="col-" style="width:49%;"><div class="card" id="tCard"><div class="card-body"><div class="card-title text-center" style="color:#828389; font-weight: bold;" data-i18n-key="power">POWER [kW]</div><h3 class="card-text text-white text-center" style="font-weight: bold;" id="power">-,-</h3></div></div></div></div></div><div class="mt-2 md-2"></div><div class="container" style="width:100%;"><div class="row justify-content-center"><div class="col-" style="width:49%;"><div class="card" id="tCard"><div class="card-body"><div class="card-title  text-center" style="color:#828389; font-weight: bold;" data-i18n-key="energy">ENERGY [kWh]</div><h3 class="card-text text-white text-center" style="font-weight: bold;" id="energy">-,-</h3></div></div></div><div class="col-" style="width:2%;"></div><div class="col-" style="width:49%;"><div class="card" id="tCard"><div class="card-body"><div class="card-title text-center" style="color:#828389; font-weight: bold;" data-i18n-key="duration">DURATION [min]</div><h3 class="card-text text-white text-center" style="font-weight: bold;" id="duration">-,-</h3></div></div></div></div></div></div><div class="mt-2 md-2"></div><div class="container" style="width:100%;"><div class="row justify-content-center"><div class="col-" style="width:100%;"><div class="card" id="tCard"><div class="card-body"><div class="card-title  text-center" style="color:#828389; font-weight: bold;" data-i18n-key="user">User ID</div><h3 class="card-text text-white text-center" style="font-weight: bold;" id="user">-,-</h3></div></div></div></div></div><div id="evseGauge"></div><div class="md-4"></div>').appendTo("#evseTable")}}