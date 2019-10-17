from pdfrw import PdfReader
import glob

URL_PREFIX = 'https://some-url.com/'

outContent = '';
outYaml = 'books:\n'

for pdf_filename in glob.glob('*.pdf'):
  mReader = PdfReader(pdf_filename)
  mPublisher = (mReader.Info.Creator).decode()
  mTitle = (mReader.Info.Title).decode()
  mUrl = URL_PREFIX + pdf_filename

  outContent += '- [%s](%s){:target="_blank"}\n' % (mTitle, mUrl)
  outYaml += '  - title: "%s"\n    link: "%s"\n' % (mTitle, mUrl)


print(outYaml)
print(outContent)
