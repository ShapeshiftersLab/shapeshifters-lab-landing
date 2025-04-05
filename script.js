document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("beginDescentBtn");
  const tooltip = document.getElementById("tooltipBox");

  btn.addEventListener("mouseover", () => {
    tooltip.style.display = "block";
  });

  btn.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });

  const trialTooltip = document.getElementById("trialTooltip");
  const feedBox = document.getElementById("coffeeFeedBox");

  const trials = [
    { id: "trial1", text: "You think you're ready for Napkin?" },
    { id: "trial2", text: "Clay doesn't mold itself." },
    { id: "trial3", text: "Notebook LM will remember this..." },
    { id: "trial4", text: "Crew AI doesn't trust newcomers." },
    { id: "trial5", text: "Replicate runs when called—sometimes." },
    { id: "trial6", text: "AutoPod edits better than you." },
    { id: "trial7", text: "Omi has thoughts. Dangerous ones." }
  ];

  trials.forEach(trial => {
    const el = document.getElementById(trial.id);
    el.addEventListener("mouseover", () => {
      trialTooltip.innerText = trial.text;
      trialTooltip.style.display = "block";
    });
    el.addEventListener("mouseout", () => {
      trialTooltip.style.display = "none";
    });
  });

  const fakeFeed = [
    "🧠 DarkLord_69 bought 5 coffees for Leo.",
    "☕ ByteQueen tipped: 'Train me, glitch god.'",
    "💀 Someone spilled espresso on the vault keys.",
    "🤖 Leo denied a free unlock request. Again."
  ];

  let feedIndex = 0;
  setInterval(() => {
    feedBox.innerText = fakeFeed[feedIndex];
    feedIndex = (feedIndex + 1) % fakeFeed.length;
  }, 4000);
});
