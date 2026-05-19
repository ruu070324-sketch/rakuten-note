// ===== 楽天経済圏 簡易シミュレーター =====
(function () {
  const yen = (n) => "¥" + Math.round(n).toLocaleString("ja-JP");

  const $monthly = document.getElementById("sim-monthly");
  const $spu = document.getElementById("sim-spu");
  const $fixed = document.getElementById("sim-fixed");
  const $market = document.getElementById("out-market");
  const $fix = document.getElementById("out-fixed");
  const $total = document.getElementById("out-total");

  function calc() {
    const monthly = Number($monthly.value) || 0;
    const spu = Number($spu.value) || 1;
    const fixed = Number($fixed.value) || 0;

    // 楽天市場での年間ポイント = 月利用額 × SPU倍率 × 12ヶ月（1%が1倍として）
    const marketYearly = monthly * (spu / 100) * 12;

    // 固定費の楽天カード払い = 1%還元 × 12ヶ月
    const fixedYearly = fixed * 0.01 * 12;

    const total = marketYearly + fixedYearly;

    $market.textContent = yen(marketYearly);
    $fix.textContent = yen(fixedYearly);
    $total.textContent = yen(total);
  }

  [$monthly, $spu, $fixed].forEach((el) => el.addEventListener("input", calc));
  calc();
})();
