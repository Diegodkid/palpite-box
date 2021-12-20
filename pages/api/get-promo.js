import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet('12I2vis8MtEbzAO7mrtGm2S7t89PKiMv748_6TJHXiBM')

export default async (req, res) => {
   //await doc.useServiceAccountAuth(credentials)
   await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
   })
   await doc.loadInfo()

   const sheet = doc.sheetsByIndex[2]
   await sheet.loadCells('A2:B2')

   const mostrarPromocaoCell = sheet.getCell(1, 0)
   const textoCell = sheet.getCell(1, 1)

   res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
   }))
}