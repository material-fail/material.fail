from pdfrw import PdfReader
import glob

URL_PREFIX = 'https://some-url.com/'

for pdf_filename in glob.glob('*.pdf'):
  mReader = PdfReader(pdf_filename)
  mTitle = (mReader.Info.Title).decode()
  mUrl = URL_PREFIX + pdf_filename
  out = '- [%s](%s){:target="_blank"}' % (mTitle, mUrl)
  print(out)
