export const state = () => ({})

export const actions = {
  async update_user(_, { payload, id }) {
    return (await this.$axios.patch(`/api/users/${ id || payload.id }/`, payload)).data
  },
  async create_user(_, payload) {
    return (await this.$axios.post(`/api/users/`, payload)).data
  },
}

export const mutations = {}
