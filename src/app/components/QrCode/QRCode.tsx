import { QRCodeCanvas } from 'qrcode.react';

interface QRCodeProps {
  value: string;
}

const QRCode: React.FC<QRCodeProps> = ({ value }) => (
  <div className="flex justify-center my-4">
    <QRCodeCanvas value={value} size={256} />
  </div>
);

export default QRCode;
