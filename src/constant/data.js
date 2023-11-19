import iconDocument from "../assets/icons8_document.svg";
import iconBell from "../assets/icons8_alarm.svg";
import iconDraft from "../assets/icons8_details.svg";
import iconForum from "../assets/icons8_talk_male.svg";
import iconThumb from "../assets/icons8_thumbsup.svg";

import {
  MotorTips1,
  MotorTips2,
  MotorTips3,
  MotorTips4,
  MotorTips5,
  MotorTips6,
  MobilTips1,
  MobilTips2,
  MobilTips3,
  MobilTips4,
  MobilTips5,
  MobilTips6,
} from "../assets/tips";

import {
  oliRecom,
  accuRecom,
  airFilterRecom,
  brakeCanvassRecom,
  lightRecom,
  oilFilterRecom,
  radiatorWaterRecom,
  sparkPlugRecom,
  tireRecom,
  brakeCanvassRecom2,
  glassFilmRecom,
} from "../assets/recom";

export const whatWeOfferContent = [
  {
    id: 1,
    title: "Pencatatan Service",
    desc: "Fitur ini berguna untuk menyimpan riwayat catatan servis pengguna. Apa saja yang diservis, tanggal, hari, dllnya akan tercatat pada fitur ini.",
    icon: iconDocument,
  },
  {
    id: 2,
    title: "Pengingat Service",
    desc: "Fitur ini berguna untuk memberikan pengingat kepada pengguna untuk melakukan service terhitung dari kapan melakukan service terakhir.",
    icon: iconBell,
  },
  {
    id: 3,
    title: "Rekomendasi Sparepart",
    desc: "Fitur ini berguna untuk merekomendasikan sparepart yang cocok digunakan untuk kendaraan yang digunakan",
    icon: iconThumb,
  },
  {
    id: 4,
    title: "Artikel & Video",
    desc: "Fitur ini berguna untuk memberikan edukasi kepada pengguna tentang cara merawat kendaraan.",
    icon: iconDraft,
  },
  {
    id: 5,
    title: "Forum",
    desc: "Fitur ini berguna untuk saling sharing pengalaman antar pengguna terkait otomotif",
    icon: iconForum,
  },
];

export const TipsMotor = [
  {
    id: 1,
    title: "Apakah Motor Listrik Ketika Hujan Bisa Menyetrum?",
    imgsrc: MotorTips1,
  },
  {
    id: 2,
    title:
      "Fakta Honda Pernah Recall Motor Karena Rangka Yang Dianggap Berbahaya",
    imgsrc: MotorTips2,
  },
  {
    id: 3,
    title: "Rangka eSAF Honda Kini Digaransi hingga 5 Tahun!",
    imgsrc: MotorTips3,
  },
  {
    id: 4,
    title: "Suzuki Saluto Bisa Masuk Indonesia, Tapi Siap- siap Harganya Mahal",
    imgsrc: MotorTips4,
  },
  {
    id: 5,
    title: "Catat! Ini Yang Mesti Diperhatikan  Saat Berkendara Di Cuaca Panas",
    imgsrc: MotorTips5,
  },
  {
    id: 6,
    title: "Ini Bedanya Garansi Rangka 5 Tahun Honda Vs Yamaha",
    imgsrc: MotorTips6,
  },
];

export const TipsMobil = [
  {
    id: 1,
    title: "Kapan sebaiknya ban mobil diganti?",
    imgsrc: MobilTips1,
  },
  {
    id: 2,
    title: "2023 waktunya berpindah ke mobil listrik?",
    imgsrc: MobilTips2,
  },
  {
    id: 3,
    title: "Produk-produk penting untuk mencuci mobil di rumah!",
    imgsrc: MobilTips3,
  },
  {
    id: 4,
    title: "Manual vs Matic, enak mana?",
    imgsrc: MobilTips4,
  },
  {
    id: 5,
    title: "Yuk, simak perbedaan aki basah dan aki kering!",
    imgsrc: MobilTips5,
  },
  {
    id: 6,
    title: "Keliling kota dengan Brio RS 2018 (5 tahun kemudian)",
    imgsrc: MobilTips6,
  },
];

export const motorRecom = [
  {
    id: 1,
    name: "Oli Mesin",
    icon: oliRecom,
  },
  {
    id: 2,
    name: "Filter Udara",
    icon: airFilterRecom,
  },
  {
    id: 3,
    name: "Kampas Rem",
    icon: brakeCanvassRecom,
  },
  {
    id: 4,
    name: "Filter Oli",
    icon: oilFilterRecom,
  },
  {
    id: 5,
    name: "Air Radiator",
    icon: radiatorWaterRecom,
  },
  {
    id: 6,
    name: "Aki",
    icon: accuRecom,
  },
  {
    id: 7,
    name: "Busi",
    icon: sparkPlugRecom,
  },
  {
    id: 8,
    name: "Ban",
    icon: tireRecom,
  },
  {
    id: 9,
    name: "Lampu",
    icon: lightRecom,
  },
];

export const mobilRecom = [
  {
    id: 1,
    name: "Oli Mesin",
    icon: oliRecom,
  },
  {
    id: 2,
    name: "Busi",
    icon: sparkPlugRecom,
  },
  {
    id: 3,
    name: "Kampas Rem",
    icon: brakeCanvassRecom2,
  },
  {
    id: 4,
    name: "Filter Oli",
    icon: oilFilterRecom,
  },
  {
    id: 5,
    name: "Filter Udara",
    icon: airFilterRecom,
  },
  {
    id: 6,
    name: "Aki",
    icon: accuRecom,
  },
  {
    id: 7,
    name: "Air Radiator",
    icon: radiatorWaterRecom,
  },
  {
    id: 8,
    name: "Ban",
    icon: tireRecom,
  },
  {
    id: 9,
    name: "Kaca Film",
    icon: glassFilmRecom,
  },
];
