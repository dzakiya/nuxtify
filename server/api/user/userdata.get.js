import knex from '../../koneksi'; // koneksi db 

export default defineEventHandler(async (event) => {
  //GET All Data 
  try {
    const user = await knex('m_login').select('nip', 'nama_pegawai','rolename', 'nama_unit', 'nama_grupunit')
    .join('user_roles', 'm_login.roles','=', 'user_roles.roleid')
    .join('m_unit', 'm_unit.kode_unit', '=', 'm_login.kdunit')

    return user; // Return data products
  } catch (error) {
    console.error('Error fetching data user:', error);
    // Handle errors appropriately (e.g., return a custom error response)
    throw createError({
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
});
