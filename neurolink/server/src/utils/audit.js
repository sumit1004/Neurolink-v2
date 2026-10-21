async function audit(client, { userId, patientId, action, entityType, entityId, metadata = {} }) { await client.query('INSERT INTO audit_logs (user_id, patient_id, action, entity_type, entity_id, metadata) VALUES ($1,$2,$3,$4,$5,$6)', [userId, patientId || null, action, entityType, entityId || null, JSON.stringify(metadata)]) }
module.exports = { audit }
