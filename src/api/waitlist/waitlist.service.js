import waitlist from './waitlist';

class WaitlistService {
    postWaitlist(email) {
        const params = JSON.stringify({
            "api_key": "JTFW8O",
            email,
            "referral_link": "www.mywebsite.com?&ref_id=1234"
        });

        return waitlist.post("/submit", params, {
            "headers": {
                "content-type": "application/json",
            },
        });
    }
}

export default new WaitlistService();
