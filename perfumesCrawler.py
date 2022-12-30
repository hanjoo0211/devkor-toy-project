import requests, os
from bs4 import BeautifulSoup
from dotenv import load_dotenv

load_dotenv()
apiUrl = os.environ.get('API_URL')
urls = ["https://perfumegraphy.com/product/list.html?cate_no=560", "https://perfumegraphy.com/product/list.html?cate_no=560&page=2"]
for url in urls:
    resp = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})

    if resp.status_code == 200:
        html = resp.text
        soup = BeautifulSoup(html, 'html.parser')
        
        products = soup.select_one('ul.prdList').select('li.xans-record-')
        for p in products:
            name = p.select_one('strong.name').text
            ns = name.split()
            if ns[0] in ['아쿠아']:
                brand = ns[:3]
                name = ns[3:]
            elif ns[0] in ['메종', '프레데릭']:
                brand = ns[:2]
                name = ns[2:]
            else:
                brand = ns[:1]
                name = ns[1:]
            if name[-1][-2:] == 'ml':
                name = name[:-1]
            
            brand = ' '.join(map(str, brand))
            name = ' '.join(map(str, name))
            imageLink = p.select('img')[1].get('src')[2:]
            description = p.select_one('li.summary').text

            body = {
                "brand": brand,
                "name": name,
                "imagelink": imageLink,
                "description": description
            }

            postResponse = requests.post(apiUrl, data=body)
            print(postResponse)

    else:
        print(resp.status_code)