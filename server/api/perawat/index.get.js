import knex from '../../koneksi'; // koneksi db 

export default defineEventHandler(async (event) => {
  //GET All Data 
  try {
    const dokter = await knex('m_perawat').select('idperawat', 'nama').where(
      'aktif', 1);
    return dokter; // Return data products
  } catch (error) {
    console.error('Error fetching data user:', error);
    // Handle errors appropriately (e.g., return a custom error response)
    throw createError({
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
});
