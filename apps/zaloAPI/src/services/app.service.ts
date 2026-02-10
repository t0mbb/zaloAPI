
import axios from 'axios';


export const searching = async (search_key: string) => {
    try {

        const vinaAPI = process.env.API_URL;
        console.log(search_key);
        if (!vinaAPI) {
            throw new Error('API_URL is not defined');
        }
        const response = await axios.post(vinaAPI, {
            "dt": search_key,
            "pageSize": 5,
            "pageIndex": 1,
            "giadau": 0,
            "giacuoi": 0
        });
        if (response.data.data.totalRecord === 0)
            return {
                "version": "chatbot",
                "content": {
                    "messages": [
                        {
                            "type": "text",
                            "text": "Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau ít phút."
                        }
                    ]
                }
            }

        const items = response.data.data.data

        const message = {
            version: "chatbot",
            content: {
                messages: [
                    {
                        type: "list",
                        elements: items.map((item: any) => ({
                            title: item.name,
                            subtitle: item.price,
                            image_url: item.image,
                            action: {
                                type: "url",
                                url: `${process.env.PRODUCT_URL}/${item.name}/${item.code}/sp`
                            }
                        }))
                    }
                ]
            }
        }

        return message

    } catch (error) {
        console.error('Error triggering external API:', error);
        throw new Error('Failed to trigger external API');
    }
}

