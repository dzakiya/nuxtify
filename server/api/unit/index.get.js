import knex from '../../koneksi'; // koneksi db 

export default defineEventHandler(async (event) => {
  //GET All Data 
  try {
    const unit = await knex('m_unit').select('kode_unit', 'nama_unit');
    return unit; // Return data 
  } catch (error) {
    console.error('Error fetching data user:', error);
    // Handle errors appropriately (e.g., return a custom error response)
    throw createError({
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
});
