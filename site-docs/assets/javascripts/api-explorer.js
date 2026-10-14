(() => {
  const input = document.getElementById("api-route-search");
  const table = document.querySelector(".api-table-wrap table");
  const count = document.getElementById("api-route-count");
  if (!input || !table || !count) return;

  const rows = Array.from(table.querySelectorAll("tbody tr"));
  const update = () => {
    const query = input.value.trim().toLocaleLowerCase();
    let visible = 0;
    rows.forEach((row) => {
      const matches = row.textContent.toLocaleLowerCase().includes(query);
      row.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = query
      ? `Showing ${visible} of ${rows.length} routes.`
      : `Showing all ${rows.length} routes.`;
  };
  input.addEventListener("input", update);
  update();
})();
