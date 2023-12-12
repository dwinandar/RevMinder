import React from "react"
import { Routes, Route } from "react-router-dom"

import LayananLayout from "./LayananLayout"
import RekomendasiProduct from "./RekomendasiProduct"

const Layanan = () => {
  return (
    <Routes>
      <Route path="rekomendasi" element={<LayananLayout />} />

      <Route path="rekomendasi/sukucadang/:uuid" element={<RekomendasiProduct />} />
    </Routes>
  )
}

export default Layanan;
