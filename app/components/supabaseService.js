import { supabase } from './supabaseClient' // Client file eka import kara

// 1. Fetch All Items (Read)
export const getTodos = async () => {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching data:', error.message)
    return null
  }
  return data
}

// 2. Add New Item (Create)
export const addTodo = async (title) => {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, is_complete: false }])
    .select()

  if (error) {
    console.error('Error adding data:', error.message)
    return null
  }
  return data
}

// 3. Update Item (Update)
export const updateTodoStatus = async (id, isComplete) => {
  const { data, error } = await supabase
    .from('todos')
    .update({ is_complete: isComplete })
    .eq('id', id)
    .select()

  if (error) {
    console.error('Error updating data:', error.message)
    return null
  }
  return data
}

// 4. Delete Item (Delete)
export const deleteTodo = async (id) => {
  const { data, error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting data:', error.message)
    return false
  }
  return true
}