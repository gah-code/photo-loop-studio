import supabase from './supabase';

export async function getLocations() {
  let { data, error } = await supabase.from('locations').select('*');

  if (error) {
    console.erorr(error);
    throw new Error('Locations could not be loaded');
  }
  return data;
}
