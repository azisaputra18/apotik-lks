<template>
    <div>
        <form @submit.prevent="tambahResep()">
            <fieldset align="center">
                <h2>input data resep</h2>
                <table>
                    <thead>
                        <tr>
                            <td>kode resep</td>
                            <td><input type="text" v-model="form.kode_obat" size="40" placeholder="kode resep" required></td>
                            <td>tanggal resep</td>
                            <td><input type="date" v-model="form.nama_obat" size="40" placeholder="isi nama passien"
                                    required></td>
                        </tr>
                        <tr>
                            <td>Nama passien</td>
                            <td> <input type="text" v-model="form.harga" size="40" placeholder="isi nama doctor" required></td>
                            <td>jumlah</td>
                            <td><input type="number" v-model="form.expired_obat" size="40" placeholder="tanggal resep" required>
                            </td>
                        </tr>
                        <tr>
                            <td>nama doctor</td>
                            <td><input type="number" v-model="form.jumlah" size="40" placeholder="jumlah obat resep" required></td>
                            <td><div class="btn">
                            <td><button class="btn btn-primary">Kirim</button></td>
                            <td><button class="btn btn-primary">batal</button></td>
                        </div></td>
                        </tr>
                        
                    </thead>
                </table>
            </fieldset>
        </form>
        <br>
        <div class="main" align=" center">
            <table class="table">
                <thead class="table-info">
                    <tr>
                        <th>No</th>
                        <th>kode resep</th>
                        <th>nama passien obat</th>
                        <th>nama doctor</th>
                        <th>tgl resep</th>
                        <th>jumlah obat</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.no_resep }}</td>
                        <td>{{ item.nama_passien }}</td>
                        <td>{{ item.nama_dokter }}</td>
                        <td>{{ item. tgl_resep }}</td>
                        <td>{{ item.jumlah_obatresep }}</td>
                      
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'

const form = ref({

    no_resep: "",
    tgl_resep: "",
    nama_passien: "",
    nama_dokter: "",
    jumlah_obatresep: ""
})

const items = ref([])
const getData = async () => {
    const res = await axios.get('http://localhost:8000/api/resep')
    items.value = res.data
    console.log(res.data)
}
onMounted(() => getData())

const tambahObat = async () => {
    console.log(form.value)
    const res = await axios.post(`http://localhost:8000/api/resep`, {
        no_resep: form.value.kode_obat,
        tgl_resep: form.value.nama_obat,
        nama_passien: form.value.expired_obat,
        nama_dokter: form.value.jumlah,
        jumlah_obat: form.value.harga
       
    })

    return res
}
</script>

<style scoped>
input[type="text" i] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="date" i] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="number" i] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.btn {
    margin-left: 10px;
}

form {
    padding-left: 129px;
    width: 1233px;
    font-family: math;

}

.main {
    width: 945px;
    height: 207px;
    margin-left: 200px;
    background: right;
}</style>