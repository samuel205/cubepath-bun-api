import { sql } from "bun";

async function migrate() {
  console.log("Ejecutando migración...");

  const schema = await Bun.file(
    import.meta.dir + "/schema.sql",
  ).text();

  await sql.unsafe(schema);

  console.log("Migración completada correctamente");
  await sql.close();
}

migrate().catch((err) => {
  console.error("Error en migración:", err);
  process.exit(1);
});
